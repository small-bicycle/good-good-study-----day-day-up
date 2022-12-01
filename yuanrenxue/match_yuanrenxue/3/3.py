"""
@File  : run.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2022/5/28
@Desc  :   第三题:  headers 参数顺序校验
"""

import requests


def main(page):
    if page > 3:
        ua = 'yuanrenxue.project'
    else:
        ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
    headers_jssm = {
        'Host': 'match.yuanrenxue.com',
        'Connection': 'keep-alive',
        'Content-Length': '0',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': ua,
        'sec-ch-ua-platform': "Windows",
        'Accept': '*/*',
        'Origin': 'https://match.yuanrenxue.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://match.yuanrenxue.com/match/3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Cookie': "sessionid=nujdpkjrht5pvvba1662kvgv90hwbjs8; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1653726253; qpfccr=true; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1653726253,1655197291,1655276981; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1655276992; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1655276993",
    }
    params = (
        ('page', page),
    )
    s = requests.session()
    s.headers = headers_jssm
    resp = s.post('https://match.yuanrenxue.com/jssm')
    response = s.get('https://match.yuanrenxue.com/api/match/3', params=params)
    print(response.text)
    content = response.json()['data']
    page_vlue = []
    for i in content:
        value = i['value']
        page_vlue.append(value)
    return page_vlue


if __name__ == '__main__':

    total = []
    for page in range(1, 6):
        resp = main(page=page)
        total += resp
    print(f'total : {total}')
    print(f'total : {max(total,key=total.count)}')
