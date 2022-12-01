"""
@File  : no_2.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/9/30
@Desc  :   猿人学内部练习平台第二题
"""
import execjs
import requests

with open('spider_two.js', 'r', encoding='utf-8') as fp:
    js_code = fp.read()
    a = execjs.compile(js_code)
    sigin = a.call("cookies_SDK")
url = 'https://www.python-spider.com/challenge/2'
print(f'sigin :{sigin}')
cookies = {
    'sessionid': '0h0ip2ctyksgqfv4w5lwoso91gphnzrr',
    'sign': sigin.split(';')[0].replace('sign=', ''),
}
print(cookies)
resp = requests.get(url=url, cookies=cookies)
print(resp)
print(resp.content.decode())
