"""
@File  : 13.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/12/27
@Desc  :   猿人学内部练习网站第十三题， 灵感来源：https://blog.csdn.net/weixin_43411585/article/details/103484643
"""
import base64
import time

import requests
from fontTools.ttLib import TTFont


def total_number(page):
    headers = {
        'authority': 'www.python-spider.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://www.python-spider.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/13',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'sessionid=esrjqtu2vrfrit1jedd0543qn46rn8qk; sign=1640571534356~af13183e4d884e9d4cf1a8dc805124bb; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1640311845,1640318501,1640568482,1640571535; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1640573629',
    }

    data = {
        'page': page
    }

    response = requests.post('https://www.python-spider.com/api/challenge13', headers=headers, data=data).json()
    woff = response.get('woff')
    save_woff = f'{page}.ttf'
    save_xml = f'{page}.xml'
    with open(save_woff, 'wb') as f:
        f.write(base64.b64decode(woff))
    font = TTFont(save_woff)
    font.saveXML(save_xml)
    bestcmap = font.getGlyphNames()[1:]
    # TODO 人工做一个本地的映射关系
    local_font = TTFont('local.ttf')
    local_bestcmap = local_font.getGlyphNames()[1:]
    local_dict = {
        "unia617": 7,
        "unia398": 1,
        "unie532": 0,
        "unif658": 2,
        "unia472": 6,
        "unib637": 3,
        "unia596": 5,
        "unib836": 8,
        "unic679": 9,
        "unib982": 4,
    }

    newmap = dict()
    for key in bestcmap:
        # TODO 获取字体的on信息 和 本地 信息作比较
        on = font['glyf'][key].flags
        for j in local_bestcmap:
            local_on = local_font['glyf'][j].flags
            if local_on == on:
                newmap[key] = local_dict[j]
    print(f'当前 {page} 页 的字体映射为： {newmap}')
    data = response.get('data')
    page_total = 0
    for i in data:
        str_i = i.get("value").replace('&#x', 'uni').strip().split(' ')
        number = ''.join([str(newmap[key]) for key in str_i])
        page_total += int(number)
    print(f'当前页面所有数据之和为： {page_total}')
    return page_total


if __name__ == '__main__':
    all_num = 0
    for page in range(1, 2):
        resp = total_number(page=page)
        all_num += resp
        time.sleep(1)
    print(f'所有数字总和为： {all_num}')

