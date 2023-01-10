"""
-*- coding: utf-8 -*-
@Time : 2023/1/9 17:15
@Author : Logan
@File : 60.py
@Comment :  DES 加密
"""
import json
import requests
import pyDes
import base64


def encrypt(data):
    '''
    加密
    '''
    key = 'aiding88'  # 密钥,一般是8位或16位
    k = pyDes.des(key, pad=None, padmode=pyDes.PAD_PKCS5)  # 传入秘钥,加密方式
    d = k.encrypt(data)  # 加密数据
    base = str(base64.b64encode(d), encoding="utf-8")  # 指定输出格式为base64
    return base


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
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1673247094; no-alert=true; sessionid=yse4wfztgg668614jf829pxyzckkiugc; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1673247172',
    }
    encrypt_page = encrypt(str(page))
    # encrypt_page = 'L89VjHns07U='
    print(encrypt_page)
    url = f"https://www.python-spider.com/api/challenge60/{encrypt_page}"
    data = {
        'page': page,
    }
    print(data)
    response = requests.post(url, headers=headers, data=data).json()
    print(response)
    result = response["data"]
    page_num = 0
    for i in result:
        num = i.get("value").strip()
        page_num += int(num)
    print(f'--当前页面为： {page}  ---- {page_num}')
    return page_num


if __name__ == '__main__':
    all_num = 0
    for i in range(1,101):
        resp = total_number(page=i)
        all_num += resp
    print(f'累加的总和为： {all_num}')
