#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
@File  : crwal_code_1.py
@Author: smallbike
@Date  : 2025-12-05 02:00
@Desc  :  参数 MD5、SHA256 加密
'''
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

def get_page_data(page):
    timestamp = int(time.time() * 1000)
    jiami_str = f"xialuo{timestamp}"
    m = hashlib.md5(jiami_str.encode()).hexdigest()
    print(f'm  => {m}')
    headers = {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,fil;q=0.7",
        "cache-control": "no-cache",
        "m": m,
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.mashangpa.com/problem-detail/7/",
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "ts": str(timestamp),
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "sessionid": "k8ta3t9ep525ow1wk8cqoke2g2gby827",
    }
    url = "https://www.mashangpa.com/api/problem-detail/7/data/"

    jiami_str = f'{m}xxoo'
    x = hashlib.sha256(jiami_str.encode()).hexdigest()
    print(f'x =>{x}')
    params = {
        "page": str(page),
        "x": x
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params, verify=False).json()
    current_array = response['r']
    # 解密响应数据
    resp = json.loads(aes_decipher(current_array))
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
