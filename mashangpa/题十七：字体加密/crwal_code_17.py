#!/usr/bin/env python
# -*- coding:UTF-8 -*-
"""
# File  : crwal_code_17.py
# Author: smallbike
# Date  : 2025/12/15
# @Desc : 
"""
import base64
import json
import time
import requests
import warnings

warnings.filterwarnings("ignore")
import subprocess
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import binascii


def get_page_data(page):
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,fil;q=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.mashangpa.com/problem-detail/17/",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
    }
    cookies = {
        "sessionid": "4mbluw5tvwab0j455h972gli2dimaga9",
    }
    url = "https://www.mashangpa.com/api/problem-detail/17/data/"
    #
    session = requests.Session()
    session.headers.clear()
    session.headers.update(headers)
    params = {
        "page": str(page),
    }
    response = session.get(url, headers=headers, cookies=cookies, params=params).json()
    print(response)

    current_array = response['current_array']
    page_num = 0
    font_decrypt_map = {
        'ꙮ': '0',
        'ઊ': '1',
        'સ': '2',
        'ત': '3',
        'ধ': '4',
        'ન': '5',
        'પ': '6',
        'ફ': '7',
        'બ': '8',
        'ભ': '9'
    }
    for item in current_array:
        str_int = ''
        for i in item:
            str_int += font_decrypt_map.get(i)
        page_num += int(str_int)
    print(f"第{page}页数据：{current_array}，总和：{total_num}")
    return page_num




if __name__ == '__main__':
    total_num = 0
    for page in range(1, 21):
        page_num = get_page_data(page)
        time.sleep(0.1)
        total_num += page_num
    print(f"所有页数据总和：{total_num}")
