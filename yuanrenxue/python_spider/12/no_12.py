"""
@File  : no_12.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/10/16
@Desc  :  
"""

import requests

headers = {
    'authority': 'www.python-spider.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'x-requested-with': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'origin': 'https://www.python-spider.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.python-spider.com/challenge/12',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cookie': 'vaptchaNetway=cn; no-alert=true; sign=1634093849849~01985609160e9ac42dd1c391e2f5acb1; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1632965510,1634031560; sessionid=c9gjwrn7rm7iyrmeh6eqbl3rjdhy2e4b; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1634372109',
}


def run(page):
    data = {
        'page': page
    }

    response = requests.post('https://www.python-spider.com/api/challenge12', headers=headers, data=data)
    print(response)
    print(response.json())
    content = response.json()

    dict_1 = {
        "&#xe44d": 9,
        "&#xf0d6": 8,
        "&#xe449": 7,
        "&#xf295": 6,
        "&#xee4a": 5,
        "&#xf12f": 4,
        "&#xf80c": 3,
        "&#xf375": 2,
        "&#xe458": 1,
        "&#xf712": 0,
    }

    tol = 0
    for i in content["data"]:
        str_list = i['value'].split(' ')
        resp = ''
        for i in str_list:
            if i:
                resp += str(dict_1.get(i))
        tol += int(resp)
    return tol

all = 0
for i in range(1,101):
    num = run(page=i)
    all += num

print(all)