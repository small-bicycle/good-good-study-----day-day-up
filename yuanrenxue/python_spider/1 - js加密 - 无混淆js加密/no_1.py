#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
@File  : no_1.py
@Author: smallbike
@Date  : 2025-09-16 0:03 
@Desc  : 练习平台第一题
'''
import base64
import time
import requests
import hashlib

def get_page_number(page):

    timestamp = str(int(time.time()))
    bs_str = '9622'+timestamp
    jiami_str = base64.b64encode(bs_str.encode('utf-8')).decode()
    safe = hashlib.md5(jiami_str.encode('utf-8')).hexdigest()

    headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,fil;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.python-spider.com/challenge/1",
        "sec-ch-ua": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Google Chrome\";v=\"140\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "timestamp": timestamp,
        "safe": safe,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        '$Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1744953343,1745415982',
        'sessionid': '0cc8tvskptlxd2j190ols2irkbt6em85',
        '__jsl_clearance': '1757991806.854|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_dabf58aff5f9fb53ec85ff1231283b4d3D',
    }
    url = "https://www.python-spider.com/api/challenge1"
    data = {
        "page": str(page)
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    data = response.get('data')
    page_num = 0
    for i in data:
        page_num += int(i.get('value').strip())
    print(f'第{page}页的和为：{page_num}')

    return page_num

if __name__ == '__main__':
    total_num = 0
    for i in range(1, 101):
        resp = get_page_number(i)
        total_num += resp
    print(f'100页总和为：{total_num}')

