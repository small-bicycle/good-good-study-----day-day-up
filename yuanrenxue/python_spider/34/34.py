import json
from lxml import etree
import execjs
import requests

headers = {
    'authority': 'www.python-spider.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'referer': 'https://www.python-spider.com/challenge/34',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
}
cookies = {
    'sessionid':'dozcbmom5n9xog19v7llxvz1402c5f0u',
}
s = requests.Session()
response = s.get('https://www.python-spider.com/challenge/34', headers=headers,cookies=cookies)
# print(response.text)
yuanrenxue34 = response.headers.get("Set-Cookie").split(';')[0]
cookies[yuanrenxue34.split('=')[0]] = yuanrenxue34.split('=')[1]


js_rind = response.text.replace('<script type="text/javascript" src="/static/challenge/34/h1.js"></script><script type="text/javascript" src="/static/challenge/34/h2.js"></script><script type="text/javascript">','').replace('</script><script type="text/javascript">sEnc();</script><script type="text/javascript">window.onload=function(){location.href=location.href}</script>','').strip()
with open('34.js', 'r') as fp:
    js_code = fp.read()
    new_js = js_rind + f'cookie="{yuanrenxue34}" \n' + js_code
    a = execjs.compile(new_js)
    safe = a.call("cookie_sdk")
print(f'safe : {safe}')


cookies[safe.split('=')[0]] = safe.split('=')[1]

print(json.dumps(cookies))
response = s.get('https://www.python-spider.com/challenge/34', headers=headers,cookies=cookies)

tree = etree.HTML(response.text)
number = sum([int(i.strip()) for i in tree.xpath('//td[@class="info"]//text()')])

print(f'三十四题的答案为 ：{number}')