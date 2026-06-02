import json
import logging
import subprocess
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List

import requests


BASE_DIR = Path(__file__).resolve().parent
SIGN_SCRIPT = BASE_DIR / "challenge21_sign.js"


@dataclass(frozen=True)
class Challenge21Config:
    api_url: str = "https://www.python-spider.com/api/challenge21"
    page_url: str = "https://www.python-spider.com/challenge/21"
    total_pages: int = 100
    request_interval_seconds: float = 0.05
    timeout_seconds: int = 20
    user_agent: str = (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/148.0.0.0 Safari/537.36"
    )


def configure_logging() -> None:
    """配置带日期时间的控制台日志，便于定位每一页请求状态。"""
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )


class Challenge21Client:
    def __init__(self, config: Challenge21Config) -> None:
        self.config = config
        self.session = requests.Session()
        self.session.headers.update(
            {
                "User-Agent": self.config.user_agent,
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Origin": "https://www.python-spider.com",
                "Referer": self.config.page_url,
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            }
        )

    def init_session(self) -> None:
        """先访问挑战页获取服务端 sessionid，后续接口请求复用同一个会话。"""
        response = self.session.get(self.config.page_url, timeout=self.config.timeout_seconds)
        response.raise_for_status()
        logging.info("初始化 session 成功，cookie=%s", self.session.cookies.get_dict())

    def make_sign(self) -> Dict[str, str]:
        """调用纯 JS 签名脚本生成接口需要的 t 与 s 参数。"""
        result = subprocess.run(
            ["node", str(SIGN_SCRIPT)],
            check=True,
            capture_output=True,
            text=True,
            cwd=str(BASE_DIR),
        )
        return json.loads(result.stdout)

    def fetch_page_values(self, page: int) -> List[int]:
        """请求指定页数据，并把响应里的 value 字段清洗成整数列表。"""
        sign = self.make_sign()
        payload = {
            "page": str(page),
            "s": sign["s"],
            "t": sign["t"],
        }
        response = self.session.post(
            self.config.api_url,
            data=payload,
            timeout=self.config.timeout_seconds,
        )
        response.raise_for_status()
        data = response.json()

        if data.get("status") != "1" or data.get("state") != "success":
            raise RuntimeError(f"第 {page} 页接口返回异常: {data}")

        values = [int(item["value"].strip()) for item in data.get("data", [])]
        logging.info("第 %s 页获取成功，本页数量=%s，本页和=%s", page, len(values), sum(values))
        return values

    def fetch_total(self) -> int:
        """顺序抓取配置中的全部页数，返回所有数字的总和。"""
        total = 0
        for page in range(1, self.config.total_pages + 1):
            values = self.fetch_page_values(page)
            total += sum(values)
            if page < self.config.total_pages:
                time.sleep(self.config.request_interval_seconds)
        return total


def main() -> None:
    """程序入口：初始化会话、抓取一百页数据并打印最终总和。"""
    configure_logging()
    client = Challenge21Client(Challenge21Config())
    client.init_session()
    total = client.fetch_total()
    logging.info("一百页数字总和=%s", total)
    print(f"total={total}")


if __name__ == "__main__":
    main()
