#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
@File  : baidu.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  : 2021/7/18
@Desc  : 
'''
import re
import glob
import requests
import execjs





headres = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Cookie': 'BIDUPSID=C38637574DA10548D7250A0AEEF8923A; PSTM=1625502108; BAIDUID=E1FCEFBA01BA98A96D9940517AE62900:FG=1; __yjs_duid=1_8dba85c7d25ff0bc43d7fcb6ca23e22a1626184961326; BDORZ=FFFB88E999055A3F8A630C64834BD6D0; BAIDUID_BFESS=4547D17E22C4E3A999EC957C6058A323:FG=1; delPer=0; PSINO=7; H_PS_PSSID=; BDRCVFR[zHcVN0eT4lc]=bvBYpeu9K4bTAR3Qh4-I0; BCLID=7387997319063903905; BDSFRCVID=pcuOJexroG0YyxOenK4vhhV1s_weG7bTDYLtOwXPsp3LGJLVJeC6EG0Pts1-dEu-EHtdogKK3gOTH4DF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tR3aQ5rtKRTffjrnhPF3K-t0XP6-hnjy3bRkX4nv5RrvM-QdMhDaKp4Wbttf5q3RymJJ2-39LPO2hpRjyxv4y4Ldj4oxJpOJ-bCL0p5aHl51fbbvbURvDP-g3-AJ0U5dtjTO2bc_5KnlfMQ_bf--QfbQ0hOhqP-jBRIE3-oJqCDWhD043D; BCLID_BFESS=7387997319063903905; BDSFRCVID_BFESS=pcuOJexroG0YyxOenK4vhhV1s_weG7bTDYLtOwXPsp3LGJLVJeC6EG0Pts1-dEu-EHtdogKK3gOTH4DF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=tR3aQ5rtKRTffjrnhPF3K-t0XP6-hnjy3bRkX4nv5RrvM-QdMhDaKp4Wbttf5q3RymJJ2-39LPO2hpRjyxv4y4Ldj4oxJpOJ-bCL0p5aHl51fbbvbURvDP-g3-AJ0U5dtjTO2bc_5KnlfMQ_bf--QfbQ0hOhqP-jBRIE3-oJqCDWhD043D; FANYI_WORD_SWITCH=1; REALTIME_TRANS_SWITCH=1; SOUND_SPD_SWITCH=1; HISTORY_SWITCH=1; SOUND_PREFER_SWITCH=1; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1626604094,1626613326; BA_HECTOR=a18g208k810k8kaglq1gf89l60q; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1626614563; ab_sr=1.0.1_MTdkYjg5NDM2MTU1YzYwYTk5MjE2NWU4ZjI5MWFlNmU0OGYyNDA2NDA2N2FjYTFkYWQxMmM5ZmE4NGE4MWU3YzI0YmJiNWQ1MWZkNWM5MDI2NmRlN2VlNGY5ZmRhMjYwNmM3ZjdhNTBhNTFjZWVjZTUxMTliMzZiMWJiOTlmYWI2OWUwMjJlMjBhMGEzMGQ1NTIxNTdhMmVmYWVjN2MxMQ==; __yjs_st=2_MmY2Yjg4MjYwYjg3ODMxNmEwZDJhYmQ4MmM3MzZiMDhlYWQxMDRiMzFmOTZjZjExMmMzNTc4NGRmYWMxNjc4MGQwMmM3ZTUyZjIyYzUzNzg0YzE0MzM2MWRjYjI5ZGNjNTExOTNhZmNjYWRjY2FiZDBjMjM1ZjgxMWIxMTUwMjhmYjY5OGEwMjQ0OWVjZDFlYjVlZTExMjc3Y2JiN2VmMGU5NzFhNTg2MWI3MThhYTQ0OTQxMTExYjg0OTQzZGVmNGY3ZGY0MTA5MGE0OTgwNmUxMzEwNmRhNTcxMTNjYTA5YzZlOGFhZTg3MDY4MjczMzdlYmIxNGIzOTRjMTA3Yl83XzVmMWYxZTBj'
    }

def baidu(work):
    with open('baidu.js', 'r', encoding='utf-8')as f:
        jscode = f.read()

    ctx = execjs.compile(jscode)
    sign = ctx.call('e', work)
    # print(f'sign: {sign}')

    res = requests.get(url='https://fanyi.baidu.com', headers=headres).text
    token = re.findall(" token: '(.*?)'", res)[0]
    # print(f'token: {token}')

    data = {
        'from': 'zh',
        'to': 'en',
        'query': work,
        'transtype': 'realtime',
        'simple_means_flag': '3',
        'sign': sign,
        'token': token,
        'domain': 'common',
    }
    res = requests.post('https://fanyi.baidu.com/v2transapi?from=en&to=zh', data=data, headers=headres).json()
    resp = res['trans_result']['data'][0]['dst']
    return  resp


work = input(f'请输入您要翻译的内容：')
resp = baidu(work=work)
print(f'【{work}】 翻译的结果为： {resp}')