#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
@File  : crwal_code_8.py
@Author: smallbike
@Date  : 2025-12-08 22:07
@Desc  :  参数 MD5、SHA256 加密
'''
import base64
import hashlib
import json
import time
import requests
import warnings

warnings.filterwarnings("ignore")
import subprocess
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import binascii
import execjs


def jiami_str_m(timestamp, page):
    # 读取 JS 文件
    with open("js_8.js", "r", encoding="utf-8") as f:
        js_code = f.read()
    # 加载 JS
    ctx = execjs.compile(js_code)
    # 调用 JS 方法
    jiami_m = ctx.call("jiami_m", timestamp, page)
    jiami_s = ctx.call("jiami_s", timestamp, )

    return jiami_m, jiami_s


def get_page_data(page):
    timestamp = int(time.time() * 1000)
    base64_t = base64.b64encode(str(timestamp).encode()).decode()
    jiami_m, jiami_s = jiami_str_m(timestamp, page)
    # print(f'base64_t  => {base64_t}')
    # print(f'jiami_m  => {jiami_m}')
    # print(f'jiami_s  => {jiami_s}')
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,fil;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://www.mashangpa.com",
        "Pragma": "no-cache",
        "Referer": "https://www.mashangpa.com/problem-detail/8/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "m": jiami_m,
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "t": base64_t  # 时间戳 base64编码
    }
    cookies = {
        "sessionid": "k8ta3t9ep525ow1wk8cqoke2g2gby827",
        "s": jiami_s
    }
    url = "https://www.mashangpa.com/api/problem-detail/8/data/"

    data = {
        "page": page
    }
    data = json.dumps(data, separators=(',', ':'))
    resp = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    current_array = resp['current_array']
    print(resp)
    page_num = 0
    for item in current_array:
        page_num += item
    print(f"第{page}页数据：{current_array}，总和：{total_num}")
    return page_num


def aes_decipher(encrypted_text):
    """
    AES CBC模式解密
    参数：
        encrypted_text: 加密后的十六进制字符串
    返回：
        解密后的原始字符串
    """
    try:
        # 使用相同的key和iv
        key = 'xxxxxxxxoooooooo'.encode('utf-8')
        iv = '0123456789ABCDEF'.encode('utf-8')

        # 创建AES解密对象
        aes = AES.new(key, AES.MODE_CBC, iv=iv)

        # 将十六进制字符串转换为字节
        ciphertext = binascii.unhexlify(encrypted_text)

        # 解密
        decrypted_data = aes.decrypt(ciphertext)

        # 去除PKCS7填充
        original_data = unpad(decrypted_data, AES.block_size, style='pkcs7')

        # 解码为字符串
        original_str = original_data.decode('utf-8')

        # print(f'解密成功: {original_str}')
        return original_str

    except binascii.Error as e:
        print(f'错误: 无效的十六进制字符串 - {e}')
        return None
    except Exception as e:
        print(f'解密失败: {e}')
        return None


if __name__ == '__main__':
    total_num = 0
    for page in range(1, 21):
        page_num = get_page_data(page)
        time.sleep(1)
        total_num += page_num
    print(f"所有页数据总和：{total_num}")
