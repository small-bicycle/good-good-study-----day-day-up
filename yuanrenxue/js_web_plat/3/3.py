"""
@File  : 2.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2022/3/23
@Desc  :   http://www.xinshangmeng.com/xsm2/?Version=2019060900，登录参数 j_mcmm 等
"""
import datetime
import os
import time
from urllib import parse
from PIL import Image
import requests
import urllib.request
import execjs

def download_img(img_url):
    """
    保存图片
    webp ---> png
    """

    url = parse.quote(img_url).replace('%3A', ':')  # url编码， 防止出现中文
    request = urllib.request.Request(url)
    try:
        resp = urllib.request.urlopen(request)
        verification_str = resp.read()
        code  = str(verification_str).split('<challenge>')[1].split('</')[0]
        print(code)
        return code
    except Exception as e:
        print(f'--- : {e}')
        return "failed"



def img_distinguish():
    img_url = f'http://login.xinshangmeng.com/login/users/forlogin/img?width=80&height=30&{int(time.time())})'
    code = download_img(img_url)
    return code


def login(username,password):
    cookies = {
        'JSESSIONID': '0000J8eOW5ZoS0N8FW-Sg0Yz_m0:1bi2iop6r',
        'lgroute': '01d285c9e09ffb2262aeafd619632b8a',
        'xsm_client': '127af8d41d2a5380f92da87c8ba5f86d',
    }

    headers = {
        'Proxy-Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'Accept': '*/*',
        'Referer': 'http://www.xinshangmeng.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    }

    img_number = img_distinguish()

    with open('3.js', 'r', encoding='utf-8') as fp:
        js_code = fp.read()
        a = execjs.compile(js_code)
        pw = a.call('m_SDK',password ,img_number)
    print(f'--加密后的密码为-->  {pw}')

    params = (
        ('jsonp', 'jQuery99902577153753709134_1648086795883'),
        ('protocol', 'http:'),
        ('loginIndex', 'http://www.xinshangmeng.com/xsm2/?Version=2022031200'),
        ('j_mmrm', username),
        ('j_mcmm', pw),
        ('j_valcode', img_number),
        ('_', int(time.time())),
    )
    print(params)




    response = requests.get('http://login.xinshangmeng.com/login/users/dologin/dfaup', headers=headers, params=params,
                            cookies=cookies, verify=False)
    print(response)
    print(response.text)

username = 'chenyi'
password = '123456'
login(username,password)



