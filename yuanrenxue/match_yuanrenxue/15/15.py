"""
@File  : run.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2022/5/28
@Desc  :   第十五题
"""
import numpy
import math
import time
import random
import pywasm
import requests


def main(page):
    if page > 3:
        ua = 'yuanrenxue.project'
    else:
        ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
    headers = {
        "authority": "match.yuanrenxue.com",
        "sec-ch-ua": "'Google Chrome';v='95', 'Chromium';v='95', ';Not A Brand';v='99'",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "x-requested-with": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?0",
        "user-agent": ua,
        "sec-ch-ua-platform": "'Windows'",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "referer": "https://match.yuanrenxue.com/match/2",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8"
    }
    cookies = {
        "sessionid": "cr652xqv7kipns0gz0eii7467ctdhgni",
    }

    t = int(time.time())
    t1 = int(t / 2)
    t2 = int(t / 2 - math.floor(random.random() * 50 + 1))
    print(t1)
    print(t2)
    wasm = pywasm.load("main.wasm")
    sign = wasm.exec("encode", [t1, t2])
    m = f"{sign}|{t1}|{t2}"
    print(f' m ---> {m}')
    params = (
            ('m', m),
            ('page', page),
        )

    response = requests.get('https://match.yuanrenxue.com/api/match/15', headers=headers, params=params, cookies=cookies)
    print(response)
    print(response.json())
    content = response.json()['data']
    page_vlue = 0
    for i in content:
        value = i['value']
        page_vlue += value
    return page_vlue

if __name__ == '__main__':

    total = 0
    for page in range(1,6):
        resp = main(page=page)
        total += resp
    print(f'total : {total}')


