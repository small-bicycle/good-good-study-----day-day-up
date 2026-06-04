import base64
import time
from pathlib import Path

import ddddocr
import requests
import cv2



headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://www.python-spider.com",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "referer": "https://www.python-spider.com/challenge/25",
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
    "sessionid": "gldwscfjjblpcczp2ymfpodi2dob7q6i",
    "iloveu": "ad55cb78eee2104d801b4216a9223193f55d25d3",
    "yuanrenxue34": "xcjOH9310q"
}


def total_number(page):
    data = {
        'page': page,
    }

    response = requests.post('https://www.python-spider.com/api/challenge25', headers=headers,cookies=cookies, data=data).json()
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


def work_verify():
    """
         验证码
    """
    while True:
        try:
            result = challenge25_verify()
            if result >= 91:
                break
        except:
            pass
        time.sleep(1)
        print(f' --------------- 验证码识别失败 ----------------')
        time.sleep(1111)

    print(f' 验证码 验证成功 进入下一页')


def challenge25_verify():
    """
        获取验证码
    """
    url = "https://www.python-spider.com/api/challenge25verify"
    response = requests.get(url, headers=headers,cookies=cookies).json()
    img1_base64 = response.get('img1')
    img2_base64 = response.get('img2')
    images = generate_images({
        "img1": img1_base64,
        "img2": img2_base64,
    })
    distant_x = ddddocr_distant()
    resp = verfy_distant(distant_x)



    return resp

def identify_gap(bg, tp, out):
    '''
    bg: 背景图片
    tp: 缺口图片
    out:输出图片
    '''
    # 读取背景图片和缺口图片
    bg_img = cv2.imread(bg)  # 背景图片
    tp_img = cv2.imread(tp)  # 缺口图片

    # 识别图片边缘
    bg_edge = cv2.Canny(bg_img, 100, 200)
    tp_edge = cv2.Canny(tp_img, 100, 200)

    # 转换图片格式
    bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
    tp_pic = cv2.cvtColor(tp_edge, cv2.COLOR_GRAY2RGB)

    # 缺口匹配
    res = cv2.matchTemplate(bg_pic, tp_pic, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)  # 寻找最优匹配
    print(min_val, max_val, min_loc, max_loc)
    # 绘制方框
    th, tw = tp_pic.shape[:2]
    tl = max_loc  # 左上角点的坐标
    print(f'tl => {tl}')
    br = (tl[0] + tw, tl[1] + th)  # 右下角点的坐标
    cv2.rectangle(bg_img, tl, br, (0, 0, 255), 2)  # 绘制矩形
    cv2.imwrite(out, bg_img)  # 保存在本地

    # 返回缺口的X坐标
    return tl[0]
def generate_images(image_map: dict[str, str]) -> list[str]:
    """
    根据 Base64 图片字典生成图片，保存到当前文件同级目录。

    :param image_map: 图片字典，key 作为文件名，value 为 Base64 图片内容
    :return: 生成后的图片文件名列表
    """
    current_dir = Path(__file__).resolve().parent
    image_names = []

    for name, base64_text in image_map.items():
        if "," in base64_text:
            base64_text = base64_text.split(",", 1)[1]

        image_bytes = base64.b64decode(base64_text + "=" * (-len(base64_text) % 4))
        suffix = ".jpg" if image_bytes.startswith(b"\xff\xd8\xff") else ".png"

        image_name = f"{name}{suffix}"
        (current_dir / image_name).write_bytes(image_bytes)
        image_names.append(image_name)

    return image_names


def ddddocr_distant():
    """
        识别缺块距离
    """
    # 初始化滑块检测对象
    slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    # 读取滑块图和背景图
    with open('img2.png', 'rb') as f:
        target_bytes = f.read()

    with open('img1.jpg', 'rb') as f:
        background_bytes = f.read()

    # 匹配位置
    res = slide.slide_match(target_bytes, background_bytes)
    # print(f"滑块位置: {res}")
    confidence = res["confidence"]
    distant_x = res["target"][0]

    if confidence > 0.19:
        distant_x = distant_x - 12
    # 可视化结果
    print(f"滑块距离: {distant_x}")
    return distant_x


def verfy_distant(distant_x):
    """
        验证缺块位置
    """
    url = "https://www.python-spider.com/api/challenge25CheckVerify"
    data = {
        "distant": distant_x
    }
    response = requests.post(url, headers=headers,cookies=cookies, data=data).json()
    print(f'滑块验证结果 -> {response}')
    rate = float(response.get('rate').replace('%', ''))
    return rate


if __name__ == '__main__':
    all_num = 0
    for i in range(1, 101):
        resp = total_number(page=i)
        all_num += resp
        work_verify()
        time.sleep(1)

    print(f'累加的总和为： {all_num}')
