"""
@File  : run.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/11/4
@Desc  :   第十二题
"""
import base64
import requests

def main(page):
    cookies = {
        'Hm_lvt_0362c7a08a9a04ccf3a8463c590e1e2f': '1632965551,1634031517,1635304517',
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1634269092,1636009377',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1634269092,1636009378',
        'vaptchaNetway': 'cn',
        'tk': '7052263529311121563',
        'sessionid': 't6m5j1u6gkc0zo4icvi43hw6fvoqoc9b',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1636010042',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1636010071',
        'qpfccr': 'true',
        'no-alert3': 'true',
    }

    if page > 3:
        ua = 'yuanrenxue.project'
    else:
        ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': ua,
        'sec-ch-ua-platform': '"Windows"',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://match.yuanrenxue.com/match/12',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    }

    m_str = 'yuanrenxue'+str(page)
    m = str(base64.encodebytes(m_str.encode("utf-8")), encoding='utf8').replace('\n', '')

    params = (
        ('page', page),
        ('m', m),
    )

    response = requests.get('https://match.yuanrenxue.com/api/match/12', headers=headers, params=params, cookies=cookies)
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
    for page in range(1,6):
        resp = main(page=page)
        total += resp
    print(f'total : {total}')