import base64
import random
import time
from pathlib import Path
import requests
from inferring import ImageModel

headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://www.python-spider.com",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "referer": "https://www.python-spider.com/challenge/18",
    "sec-ch-ua": "\"Chromium\";v=\"148\", \"Google Chrome\";v=\"148\", \"Not/A)Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "sessionid": "6w7zvtm12ilqv71k1r3tepo1i3to8vk1"

}

def total_number(page):
    data = {
        'page': page,
    }

    response = requests.post('https://www.python-spider.com/api/challenge18', headers=headers, cookies=cookies,
                             data=data).json()
    print(f'response  ==>{response}')
    data = response["data"]
    page_num = 0
    num_list = []
    for i in data:
        num = i.get("value").replace('\r', '')
        num_list.append(num)
        page_num += int(num)
    print(f'第 {page} 页的 数字总和为： {page_num} ===> {num_list}')
    return page_num




def challenge18_verify(verfy_):
    """
        获取验证码
    """
    url = "https://www.python-spider.com/api/challenge18/verify"
    params_key = random.random()
    params = {
        params_key: ""
    }

    response = requests.get(url, headers=headers, params=params)
    print(response.status_code)
    print(response.headers.get("Content-Type"))

    # 保存接口返回的图片二进制内容为 png 文件
    output_path = Path("verify.png")
    output_path.write_bytes(response.content)

    print(f"图片已保存：{output_path.resolve()}")
    resp = verfy_.verfiy_png(output_path.resolve())
    print(f'运算结果： {resp}')

    return resp






if __name__ == '__main__':
    verfy_ = ImageModel()

    all_num = 0
    for i in range(1, 101):
        resp = total_number(page=i)
        all_num += resp
        num = challenge18_verify(verfy_)

        time.sleep(1)

    print(f'累加的总和为： {all_num}')

