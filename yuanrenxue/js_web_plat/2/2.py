"""
@File  : 2.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2022/3/23
@Desc  :   http://www.byf.com/member/login.php ，登录密码MD5加密
"""
import requests
import execjs

def login(username,password):
    cookies = {
        'Hm_lvt_75a78a84555c3c024ba8c3e8c0a245fc': '1648024966',
        'Hm_lpvt_75a78a84555c3c024ba8c3e8c0a245fc': '1648025402',
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Upgrade-Insecure-Requests': '1',
        'Origin': 'http://www.byf.com',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Referer': 'http://www.byf.com/member/login.php',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    }

    with open('2.js','r',encoding='utf-8')as fp:
        js_code = fp.read()
        a = execjs.compile(js_code)
        pw = a.call('m_SDK', password)
    print(f'--加密后的密码为-->  {pw}')
    data = {
      'forward': 'http://www.byf.com/',
      'username': username,
      'password': pw,
      'submit': ' \u767B \u5F55 ',
      'cookietime': '1'
    }

    response = requests.post('http://www.byf.com/member/login.php', headers=headers, cookies=cookies, data=data, verify=False)
    print(response)

username = '123456'
password = '123456'
login(username,password)