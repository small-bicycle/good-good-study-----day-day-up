"""
@File  : 59.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2022/7/29
@Desc  :  51 页的时候 第一个数值 减了 1  需要在总和加1
"""
import requests


def total_number(page):
    headers = {
        'authority': 'www.python-spider.com',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': '__jsl_clearance=1655430282.316^|0^|clD4VpfqhdaLBWywKWy^%^2FZyfi6d_5b6adfb6ef5044360cb64536f1eb3e4f3D; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1657855626; no-alert=true; sessionid=fegep2uvbzk2hrz4o0tbfcr41ungvo1u; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1659063447',
        'origin': 'https://www.python-spider.com',
        'pragma': 'no-cache',
        'referer': 'https://www.python-spider.com/challenge/59',
        'sec-ch-ua': '^\\^.Not/A)Brand^\\^;v=^\\^99^\\^, ^\\^Google',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '^\\^Windows^\\^',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    data = {
        'page': page,
    }

    response = requests.post('https://www.python-spider.com/api/challenge59', headers=headers, data=data).json()
    print(response)
    data = response["data"]
    page_num = 0
    for i in data:
        num = i.get("value").replace('\r', '')
        page_num += int(num)
    print(f'--当前页面为： {page}  ---- {page_num}')
    return page_num


if __name__ == '__main__':
    all_num = 0
    for i in range(1, 101):
        resp = total_number(page=i)
        all_num += resp
    print(f'累加的总和为： {all_num}')
