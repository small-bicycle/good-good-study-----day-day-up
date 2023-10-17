#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
@File  : ec_minmetals_com_cn.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  : 2023/10/17
@Desc  : 
'''
import requests
import json
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


def by_lx_page():
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,fil;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://ec.minmetals.com.cn",
        "Pragma": "no-cache",
        "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info?tabIndex=0",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "SUNWAY-ESCM-COOKIE": "0648c32a-8381-4f8f-b1bd-0eec809351a4",
        "__jsluid_s": "80327be61cc2498bd7d92ce6f3fb2ca9",
        "JSESSIONID": "D71D8E13650FC4788BCC510939C47481"
    }
    url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"

    public_url = "https://ec.minmetals.com.cn/open/homepage/public"
    public_content = requests.post(public_url, headers=headers, cookies=cookies).text
    # TODO 页码
    PageIndex = 3
    with open('encrypt_func.js', 'r', encoding='utf-8') as fp:
        js_code = fp.read()
        a = execjs.compile(js_code)
    m = a.call('jiami_SDK', public_content, PageIndex)
    print(f' 加密后的参数为： {m}')

    data = {
        "param": m
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()

    print(f'响应结果为： {response}')


if __name__ == '__main__':
    by_lx_page()
