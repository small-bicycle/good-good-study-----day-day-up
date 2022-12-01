"""
@File  : spider_1.py
@Author: YuanMing
@Date  :  2022/4/12
@Desc  :  http://glidedsky.com/level/crawler-basic-1
"""
import requests
from pyquery import PyQuery as pyq

cookies = {

    'XSRF-TOKEN': 'eyJpdiI6InN1alVLaG9QXC9neEczczBKaHl3ZnZ3PT0iLCJ2YWx1ZSI6IldWem9TOVpSendpQ2ZoVnlHRnhJWmRCSk10T2pWOHdVbkxicE8zRlJjRE9HdWZcL3g1RXUyYjhvSTNuOEJBeG1LIiwibWFjIjoiYWRjYTZkYTJiN2Q5NGIzMjc0Y2QxOWY4NThjMjg5MmViZDBlZTNmY2IwMTBjOTYyZGQ3MDYzZjRhYzEzMWNhYSJ9',
    'glidedsky_session': 'eyJpdiI6IkdjVjlLYnR5UjllM3ZWNEhhRkFSOEE9PSIsInZhbHVlIjoiTHRXWklVdEFoY0ZxV1huVk9kUTNZSTZGMTBHb2ZWWHRQd1JFUU1ZRjJxbmxlZjlJeFhLem95NVZHcmJ5c2ZGQSIsIm1hYyI6ImVjNTRhOWRlOGYzYjQzYmJiOTQyZDkzMzM5NzUxNjZmMzBhYjVhOTZiYzhjNjNiZmQ1YzlmMTMzNDZlM2IxYTAifQ%3D%3D',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Proxy-Connection': 'keep-alive',
    'Referer': 'http://glidedsky.com/level/crawler-basic-1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
}

response = requests.get('http://glidedsky.com/level/web/crawler-basic-1', headers=headers, cookies=cookies,verify=False)
# print(response.text)
doc = pyq(response.text)
cts = doc('.col-md-1')
nomber = 0
total = sum([ int(pyq(i).text()) for i in cts])
print(total)
