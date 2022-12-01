"""
@File  : 14.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/12/21
@Desc  :  
"""
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
        'referer': 'https://www.python-spider.com/challenge/3',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    }

    with open('3.js', 'r') as fp:
        js_code = fp.read()
        a = execjs.compile(js_code)
        m = a.call('cookies_SDK')
    print(m)

    cookie = {
        "sessionid": "h0ywd8onbmdmakriydffzsjr0w3ctpv2",
        "m": m,
    }
    data = {
        'page': page,
    }

    response = requests.post('https://www.python-spider.com/api/challenge3', headers=headers, cookies=cookie,
                             data=data).json()
    print(response)
    data = response["data"]
    page_num = 0
    for i in data:
        num = i.get("value").replace('\r', '')
        page_num += int(num)
    print(f'第 {page} 页的 数字总和为： {page_num}')
    return page_num


if __name__ == '__main__':
    all_num = 0
    for i in range(1, 101):
        resp = total_number(page=i)
        all_num += resp
    print(f'累加的总和为： {all_num}')
