"""
@File  : 17.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/12/16
@Desc  :  猿人学攻防比赛练习网站 第17题
"""
import httpx

client = httpx.Client(http2=True)
client = httpx.Client(http2=True)


def main(page):
    if page > 3:
        ua = 'yuanrenxue.project'
    else:
        ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
    headers = {
        'authority': 'match.yuanrenxue.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': ua,
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://match.yuanrenxue.com/match/17',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'Hm_lvt_0362c7a08a9a04ccf3a8463c590e1e2f=1635304517,1637033875; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1639643191; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1639643196; qpfccr=true; no-alert3=true; tk=8610004978248932752; sessionid=afoyjof7aohv8o4266yjx5kxe5i6woz5; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1639643396; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1639643396',
    }

    params = {
        "page": page,
    }


    response = client.get('https://match.yuanrenxue.com/api/match/17', headers=headers, params=params)
    print(response)
    print(response.json())
    content = response.json()['data']
    page_vlue = 0
    for i in content:
        value = i['value']
        page_vlue += value
    return page_vlue


if __name__ == '__main__':

    total = 0
    for page in range(1, 6):
        resp = main(page=page)
        total += resp
    print(f'total : {total}')
