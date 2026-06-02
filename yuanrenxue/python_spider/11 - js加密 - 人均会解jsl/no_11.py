"""
@File  : no_11.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/10/16
@Desc  :  
"""
import requests

headers = {
    'authority': 'www.python-spider.com',
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-dest': 'document',
    'referer': 'https://www.python-spider.com/challenge/11',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cookie': "vaptchaNetway=cn; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1638067405; sessionid=1iavp9ipsq3wb6pjy1nkpbwezptw9hfg; __jsl_clearance=1638067469.856|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_ba45959e63195aeb4ec164cda42b38753D; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1638067472"
}

response = requests.get('https://www.python-spider.com/challenge/11', headers=headers)
print(response)
print(response.text)