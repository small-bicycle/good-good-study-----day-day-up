"""
-*- coding: utf-8 -*-
@Time : 2023/1/9 14:55
@Author : Logan
@File : 57.py
@Comment :  des解密 默认是ECB  ECB秘钥必须是八位字节
"""
import json
import requests
import pyDes
import base64

def decrypt_py(data, secretkey):
    des_obj = pyDes.des(secretkey, secretkey, padmode=pyDes.PAD_PKCS5)

    decodebs64data = base64.b64decode(data)

    return  des_obj.decrypt(decodebs64data).decode('utf-8')


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
    data = {
        'page': page,
    }

    response = requests.post('https://www.python-spider.com/api/challenge57', headers=headers, data=data).json()
    print(response)
    result = response["result"]
    print(result)
    key_str = result[0:8]
    decrypt_str = result[8::]
    data = json.loads(decrypt_py(decrypt_str, key_str)).get('data')
    print(data)
    page_num = 0
    for i in data:
        num = i.get("value").strip()
        page_num += int(num)
    print(f'--当前页面为： {page}  ---- {page_num}')
    return page_num





if __name__ == '__main__':
    all_num = 0
    for i in range(1, 101):
        resp = total_number(page=i)
        all_num += resp
    print(f'累加的总和为： {all_num}')
