"""
@File  : news_project_deatil.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/9/30
@Desc  :
"""
import json
import time

import requests
from user_agent import generate_user_agent
from btc8.encrypt import EncryptClass

word = '{"appId":"1","timestamp":' + str(int(time.time())) + ',"serverCode":"0"}'
# word = '{"appId":"1","timestamp":' + str(1633926527) + ',"serverCode":"0"}'
key = 'WTAHAPPYACTIVITY'  # 此处问加密key值
print(str(int(time.time())))
encrypt = EncryptClass()
sign = encrypt.encry(word, key)
Authorization = '{"secretKeyVersion":1,"sign":' + str(sign) + '}'
# Authorization = '{"secretKeyVersion":1,"sign":"gDt1nQ3Ay458FG_Xj-Aum2iEe2ZUiDbqGkW6RRN2guQhLaCyKEvJDXvq5v8Mj4qRTWeDNrlOJirimPSo2PO0DQ=="}'
print(Authorization)

headers_0 = {
    'authority': 'webapi.8btc.cn:6443',
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'authorization': Authorization,
    'accept': 'application/json, text/plain, */*',
    'user-agent': generate_user_agent(device_type='desktop'),
    'from': 'web',
    'source-site': '8btc',
    'sec-ch-ua-platform': '"Windows"',
    'origin': 'https://www.8btc.com',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.8btc.com/',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
}

params = (
    ('type', '2'),
    ('location_type', '1'),
)
s = requests.session()
response = s.get('https://webapi.8btc.cn:6443/forum/link/list', headers=headers_0, params=params)
print(response)
print(response.json( ))


headers = {

    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'authorization': Authorization,
    'content-length': '679',
    'content-type': 'application/json',
    'from': 'web',
    'origin': 'https://www.8btc.com',
    'referer': 'https://www.8btc.com/',
    'sec-ch-ua': '""Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'source-site': '8btc',
    'user-agent': generate_user_agent(device_type='desktop'),

}
#
data = '{"operationName":"listProject","variables":{"first":18,"offset":18},"query":"query listProject($first: Int = 18, $offset: Int, $termId: Int) {\n  projectGraph {\n    list: listProject(page: {first: $first, offset: $offset, pattern: OFFSET}, param: {termId: $termId}) {\n      edges {\n        node {\n          slug\n          name\n          image\n          f10Url\n          desc\n          stat {\n            comments\n            posts\n            views\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      pageInfo {\n        totalCount\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}'

response1 = s.post('https://gate.8btc.cn:8443/one-graph-auth/graphql', headers=headers, data=json.dumps(data))
print(response1)
print(response1.json())
