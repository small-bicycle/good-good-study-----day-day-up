#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
@File  : crwal_code_1.py
@Author: smallbike
@Date  : 2025-12-03 23:05 
@Desc  :  AES CBC  加密
'''
import base64
import json
import time
import requests
import warnings

warnings.filterwarnings("ignore")
from Crypto.Util.Padding import pad
from Crypto.Cipher import AES


def get_page_data(page):
    headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,fil;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "origin": "https://www.mashangpa.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.mashangpa.com/problem-detail/5/",
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
    url = "https://www.mashangpa.com/api/problem-detail/5/data/"

    timestamp = int(time.time() * 1000)
    params = {
        "page": str(page),
        "_ts": str(timestamp)
    }
    xl = aes_cipher(json.dumps(params))
    print(f'xl: {xl}')
    data = {
        "xl": xl
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    print(response)
    current_array = response['current_array']
    page_num = 0
    for item in current_array:
        page_num += item
    print(f"第{page}页数据：{current_array}，总和：{total_num}")
    return page_num


def aes_cipher(aes_str):
    # 使用key,选择加密方式
    key = 'jo8j9wGw%6HbxfFn'.encode('utf-8')
    iv = '0123456789ABCDEF'.encode('utf-8')
    # 创建AES对象
    aes = AES.new(key, AES.MODE_CBC, iv=iv)
    # PKCS7填充并加密
    padded_data = pad(aes_str.encode('utf-8'), AES.block_size, style='pkcs7')
    ciphertext = aes.encrypt(padded_data)
    encrypted_text = ciphertext.hex().upper().lower()  # 解码

    print(f'encrypted_text: {encrypted_text}')
    # 加密结果
    # 此处我的输出结果老有换行符，所以用了临时方法将它剔除

    return encrypted_text


if __name__ == '__main__':
    total_num = 0
    for page in range(1, 21):
        page_num = get_page_data(page)
        time.sleep(0.1)
        total_num += page_num
    print(f"所有页数据总和：{total_num}")
