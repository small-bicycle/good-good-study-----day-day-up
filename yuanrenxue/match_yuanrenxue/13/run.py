"""
@File  : run.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/11/4
@Desc  :   第十三题
"""

import execjs
import requests


def main(page):
    if page > 3:
        ua = 'yuanrenxue.project'
    else:
        ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' \
             'Chrome/95.0.4638.54 Safari/537.36'

    cookies = {
        'sessionid': 't6m5j1u6gkc0zo4icvi43hw6fvoqoc9b',
    }

    headers = {
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': ua,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,'
                  'application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': 'https://match.yuanrenxue.com/match/13',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    }

    response = requests.get('https://match.yuanrenxue.com/match/13', headers=headers, cookies=cookies, verify=False)
    content = response.content.decode()
    js_code = content.split("+';path=/'")[0].split("('=')")[1]
    yuanrenxue_cookie = execjs.eval(js_code)
    print(f"yuanrenxue_cookie : {yuanrenxue_cookie}")

    cookies = {
        'sessionid': 't6m5j1u6gkc0zo4icvi43hw6fvoqoc9b',
        'yuanrenxue_cookie': yuanrenxue_cookie,
    }
    params = (
        ('page', page),
    )

    response = requests.get('https://match.yuanrenxue.com/api/match/13', headers=headers, params=params,
                            cookies=cookies, verify=False)

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
    for i in range(1, 6):
        resp = main(page=i)
        total += resp
    print(f'total : {total}')
