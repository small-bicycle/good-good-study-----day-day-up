"""
@File  : 24.py
@Author: YuanMing
@Date  :  2022/4/26
@Desc  :  
"""
import httpx
client = httpx.Client(http2=True)

def run(page):
    headers = {
        'authority': 'www.python-spider.com',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'sessionid=h7skipil36bz3cg4z6pn9869nysn3gn2',
        'origin': 'https://www.python-spider.com',
        'pragma': 'no-cache',
        'referer': 'https://www.python-spider.com/challenge/24',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    data = {
      'page': page
    }

    result = client.post('https://www.python-spider.com/api/challenge24', headers=headers, data=data).json()
    page_number = sum([int(i.get('value').strip()) for i in result.get("data")])
    print(f' {page} 页数字总和为 ： {page_number}')
    return page_number

if __name__ == '__main__':
    total_bum = 0
    for page in range(1,101):
        resp = run(page=page)
        total_bum += resp
    print(f'24 题 100 页 数字总和为： {total_bum}')