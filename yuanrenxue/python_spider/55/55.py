"""
@File  : 55.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2022/7/27
@Desc  :
"""
import json
import execjs
import requests


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
        'cookie': '__jsl_clearance=1655430282.316|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_5b6adfb6ef5044360cb64536f1eb3e4f3D; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1657855626; sessionid=tve23yal89ma7cy3tsl3ddauwfxodfz1; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1658893040',
    }
    data = {
        'page': page,
    }

    response = requests.post('https://www.python-spider.com/api/challenge55', headers=headers, data=data).json()
    print(response)
    result = response["result"]
    js_code = """
        var CryptoJS = require("crypto-js");

        function decode(str){
            var KEY = 'aiding6666666666';
            var key = CryptoJS.enc.Utf8.parse(KEY);
            var decrypted = CryptoJS.AES.decrypt(str, key, {
                           // iv: iv,
                           mode: CryptoJS.mode.ECB,
                           padding: CryptoJS.pad.Pkcs7,
            });
            return decrypted.toString(CryptoJS.enc.Utf8)
        }
    """
    a = execjs.compile(js_code)
    data = json.loads(a.call("decode", result)).get('data')
    print(data)
    page_num = 0
    for i in data:
        num = i.get("value").strip()
        page_num += int(num)
    print(f'--?????????????????? {page}  ---- {page_num}')
    return page_num


if __name__ == '__main__':
    all_num = 0
    for i in range(1, 101):
        resp = total_number(page=i)
        all_num += resp
    print(f'????????????????????? {all_num}')
