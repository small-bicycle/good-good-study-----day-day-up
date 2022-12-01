"""
@File  : spider_1.py
@Author: YuanMing
@Date  :  2022/4/12
@Desc  :  http://glidedsky.com/level/crawler-basic-1
"""
import requests
import base64
from pyquery import PyQuery as pyq
from fontTools.ttLib import TTFont

# 字体转换
def font_switch(base_info, number_info):
    page_one = base_info
    b=base64.b64decode(page_one)
    with open('new_page.ttf','wb')as f:
        f.write(b)
    font=TTFont('main.ttf')    #打开本地字体文件local.ttf
    # font.saveXML('main.xml')   #将ttf文件转化成xml格式并保存到本地，主要是方便我们查看内部数据结构
    obj_list1=font.getGlyphNames()[1:]   #获取所有字符的对象，去除第一个
    uni_list1=font.getGlyphOrder()[1:] #获取所有编码，去除前1个

    #手动确认编码和数字之间的对应关系，保存到字典中
    dict={
        'seven':6,
        'six':8,
        'four':0,
        'eight':5,
        'two':1,
        'five':4,
        'one':9,
        'zero':7,
        'nine':2,
        'three':3,
    }

    # 网页新下载的
    font2=TTFont('new_page.ttf')  # 打开新下载的字体文件
    obj_list2=font2.getGlyphNames()[1:]   #获取所有字符的对象，去除第一个
    uni_list2=font2.getGlyphOrder()[1:] #获取所有编码，去除前1个
    new_dict= {}
    for uni2 in uni_list2:
        obj2=font2['glyf'][uni2]  #获取编码uni2在new_page.ttf中对应的对象
        for uni1 in uni_list1:
            obj1=font['glyf'][uni1]
            if obj1==obj2:
                new_dict[f'{uni2}'] = dict[uni1]
    # 得到字体转化后的真正值
    print(f' 新获取页面字体的对应关系  {new_dict}')

    #TODO 将传进来的数字转化
    number = number_info
    # 列表
    lists = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ]
    new_number = [int(''.join([str(new_dict[lists[int(n)]]) for n in num])) for num in number]
    print(f' 得到字体转化后的真正值 : {new_number}')
    return sum(new_number)


def no_2(page):
    cookies = {
        'footprints': 'eyJpdiI6ImNoMzE2TzNCNjVsTEs2SjNKZHhjMEE9PSIsInZhbHVlIjoiU2pwTTdRdEx4KzBVRldXXC9aRHVTbWx5T1dEeEl0OUJBZUZRenpVZk5GZ0pGaUdudTVkaEpheE40NkFPdHhCY1wvIiwibWFjIjoiMTRiODU4NjQ2ZmRmYmU4Y2JlNDBmZDBmMDI5MmI0Nzg1N2ZkZDYwMWYwZDdhMzg2MDkyZjc2ZDk5ZmQwMWIzOSJ9',
        'Hm_lvt_020fbaad6104bcddd1db12d6b78812f6': '1649731655',
        '_ga': 'GA1.2.893424159.1649731656',
        '_gid': 'GA1.2.1695980024.1649731656',
        '__gads': 'ID=cf4f4fb3723f2679-22b76622dad10000:T=1649731655:RT=1649731655:S=ALNI_Maid22w7PwM-TA9LEVvXPcmQCuX8w',
        'XSRF-TOKEN': 'eyJpdiI6Ik9ZNjRVTVlUTmQ4Q2hCdjlaV1NjK0E9PSIsInZhbHVlIjoiZ0JjWmpic2tqRnFXbDdnS2FPZnVnWUlxQUxJMkRWRGZlUlc5Q2hIbmlSczJ2MGFka2JhZXpYek1NeitUYlEzSiIsIm1hYyI6Ijg5YTdmNDZjZTMyY2RmODAzMTViMTU3OGQ5ZGM1MDcwNDc1MmNjY2E0ZjM3Y2YxZmNmMDJhNTg1NWI1MzM0MjEifQ%3D%3D',
        'glidedsky_session': 'eyJpdiI6IjBtYXVKVjFVNkt3WkI1SzJuWlwvaFN3PT0iLCJ2YWx1ZSI6InZzR0V1RGFBXC9lZ2xaZlwvcjNvbHNSSjRcL1BpVHJNdlZcL1BGTjl1Nnhqd2diY25SR3d5eU1GRkVHOXRIYk1GejF3IiwibWFjIjoiMjViNDVlZTk2ZTA4MWIxMDU4OGI1ZGE0NjUzMDUwZjBiZTBhYjBiY2RjZWNmZDk3OTBkYWM4ZDMyMmY4ZTQzOSJ9',
        'Hm_lpvt_020fbaad6104bcddd1db12d6b78812f6': '1649746829',
        '_gat_gtag_UA_75859356_3': '1',
    }
    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Proxy-Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
    }

    response = requests.get(f'http://glidedsky.com/level/web/crawler-font-puzzle-1?page={page}', headers=headers, cookies=cookies,verify=False)
    # print(response.text)
    with open('4.html','w',encoding='utf-8')as fp:
        fp.write(response.text)
    doc = pyq(response.text)
    cts = doc('style')
    base_info = ''.join([ pyq(i).text().split('base64,')[1].split(')')[0] for i in cts])
    cts = doc('.col-md-1')
    num_list = ([pyq(i).text() for i in cts])
    print(f' 传入源码中数值的列表 {num_list}')
    num_sum = font_switch(base_info=base_info, number_info=num_list)
    return num_sum

sum_total = 0
for page in range(1,1001):
    resp = no_2(page)
    sum_total +=resp
print(sum_total)
