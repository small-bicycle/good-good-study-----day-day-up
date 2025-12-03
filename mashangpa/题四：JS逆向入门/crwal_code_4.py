#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
@File  : crwal_code_1.py
@Author: smallbike
@Date  : 2025-12-03 23:05 
@Desc  :  MD5 加密
'''
import time
import hashlib
import requests
import warnings
warnings.filterwarnings("ignore")

def get_page_data(page):
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,fil;q=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.mashangpa.com/problem-detail/1/",
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36"
    }
    cookies = {
        "sessionid": "k8ta3t9ep525ow1wk8cqoke2g2gby827",
    }
    url = "https://www.mashangpa.com/api/problem-detail/4/data/"
    timestamp = int(time.time()*1000)
    jiami_str = f"tuling{timestamp}{page}"
    print(jiami_str)
    sign = hashlib.md5(jiami_str.encode()).hexdigest()
    params = {
        "page": str(page),
        "sign": sign,
        "_ts": str(timestamp)
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params,verify=False).json()
    print(response)
    current_array = response['current_array']
    page_num = 0
    for item in current_array:
        page_num += item
    print(f"第{page}页数据：{current_array}，总和：{total_num}")
    return page_num

if __name__ == '__main__':
    total_num = 0
    for page in range(1, 21):
        page_num = get_page_data(page)
        time.sleep(1)
        total_num += page_num
    print(f"所有页数据总和：{total_num}")
