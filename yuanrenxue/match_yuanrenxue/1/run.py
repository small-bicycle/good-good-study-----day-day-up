"""
@File  : run.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/11/4
@Desc  :   第一题
"""
import base64

import execjs
import requests

def main(page):
    cookies = {
        "Hm_lvt_c99546cf032aaa5a679230de9a95c7db": "1634269092,1636009378,1636078198,1636719947",
        "qpfccr": "true",
        "no-alert3": "true",
        "Hm_lvt_9bcbda9cbf86757998a2339a0437208e": "1636009377,1636014614,1636078198,1636719952",
        "tk": "830487848769531956",
        "sessionid": "r98d6vpttlkuj335su3xks0x69xpqvc1",
        "Hm_lpvt_9bcbda9cbf86757998a2339a0437208e": "1636719974",
        "Hm_lpvt_c99546cf032aaa5a679230de9a95c7db": "1636724380"
    }

    if page > 3:
        ua = 'yuanrenxue.project'
    else:
        ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
    headers = {
        "authority": "match.yuanrenxue.com",
        "sec-ch-ua": "'Google Chrome';v='95', 'Chromium';v='95', ';Not A Brand';v='99'",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "x-requested-with": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?0",
        "user-agent": ua,
        "sec-ch-ua-platform": "'Windows'",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "referer": "https://match.yuanrenxue.com/match/1",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8"
    }

    with open('new.js', 'r', encoding='utf-8') as fp:
        js_code = fp.read()
        a = execjs.compile(js_code)
        m = a.call("m_SDK")
    print(m)
    params = (
        ('page', page),
        ('m', m),
    )

    response = requests.get('https://match.yuanrenxue.com/api/match/1', headers=headers, params=params, cookies=cookies)
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
    print(f'total : {total/50}')



'''
old_eval = eval
old_eval =  function(argument){
	my task;
	return old_eval .apply(argument)
}
eval.prototype.tostring = function eval() { [native code] }

'''
