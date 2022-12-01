"""
@File  : login.py
@Author: YuanMing
@Date  :  2022/6/17
@Desc  :  慕课网登陆 ： password，  browser_key
"""
import execjs
import requests


import requests

def login(password):
    cookies = {
        'imooc_uuid': '0703c623-4bba-4db4-9888-4eba4a13e045',
        'imooc_isnew': '1',
        'imooc_isnew_ct': '1655437643',
        'sajssdk_2015_cross_new_user': '1',
        'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%221816fc5d2119ae-03fa78f9d1f4a6-14333270-2073600-1816fc5d21275%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%221816fc5d2119ae-03fa78f9d1f4a6-14333270-2073600-1816fc5d21275%22%7D',
        'IMCDNS': '0',
        'Hm_lvt_76783e78c7e55cc7eae7861a979dd444': '1655437645',
        'Hm_lpvt_76783e78c7e55cc7eae7861a979dd444': '1655437645',
        'MEIQIA_TRACK_ID': '2AgiUhXEXjE2rPSz82xUorgurNI',
        'MEIQIA_VISIT_ID': '2AgiUl4VWPVr7oAaMqhylMUn4b6',
        'june2022': '1655437570000',
        'cvde': '62abf94b11f15-3',
    }

    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://class.imooc.com',
        'Pragma': 'no-cache',
        'Referer': 'https://class.imooc.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    data = {
      'username': '15797642529',
      'password': password,
      'verify': '',
      'remember': '1',
      'pwencode': '1',
      'browser_key': '3e80bd9d4dfe70c2a7b5713a5609ab37',
      'referer': 'https://class.imooc.com'
    }
    ss = requests.session()
    response = ss.post('https://class.imooc.com/passport/user/login', headers=headers, cookies=cookies, data=data)
    print(response)
    print(response.json())
    resp = ss.get('https://www.imooc.com')


def prelogin():

    cookies = {
        'imooc_uuid': '0703c623-4bba-4db4-9888-4eba4a13e045',
        'imooc_isnew': '1',
        'imooc_isnew_ct': '1655437643',
        'sajssdk_2015_cross_new_user': '1',
        'MEIQIA_TRACK_ID': '2AgiUhXEXjE2rPSz82xUorgurNI',
        'MEIQIA_VISIT_ID': '2AgiUl4VWPVr7oAaMqhylMUn4b6',
        'june2022': '1655437570000',
        'PSEID': '6176de0791c5bce0447707eb7f67d8c4',
        'IMCDNS': '0',
        'Hm_lvt_f0cfcccd7b1393990c78efdeebff3968': '1655438383',
        'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%221816fc5d2119ae-03fa78f9d1f4a6-14333270-2073600-1816fc5d21275%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Flink%22%7D%2C%22%24device_id%22%3A%221816fc5d2119ae-03fa78f9d1f4a6-14333270-2073600-1816fc5d21275%22%7D',
        'Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968': '1655452362',
        'cvde': '62abf94b11f15-14',
    }

    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': '0',
        'Origin': 'https://www.imooc.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.imooc.com/user/newlogin',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    response = requests.post('https://www.imooc.com/passport/user/prelogin', headers=headers, cookies=cookies)
    print(response.json())
    return response.json()
if __name__ == '__main__':
    prelogin()
    password = input('请输入密码：')
    login(password)
#
# def get_password():
#     with open('imooc_login.js', 'r', encoding='utf-8') as fp:
#         js_code = fp.read()
#         # print(js_code)
#     a = execjs.compile(js_code)
#     password = a.call("SDK_pwd")
#     print(password)
# #
# if __name__ == '__main__':
#     get_password()