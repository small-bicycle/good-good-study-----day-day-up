'''

爬虫的目标很简单，就是拿到想要的数据。

这里有一个网站，里面有一些数字。把这些数字的总和，输入到答案框里面，即可通过本关。

提交之前要验证邮箱哦~

待爬取网站: http://glidedsky.com/level/web/crawler-basic-1
'''
from config import re_value, font_switch, get_css_style,move,font_switch_2,xue_bi_1,xue_bi_2
# from 爬虫闯关.tools.chaojiying import get_code
from lxml import etree
import requests
import os
import hashlib
import  random
import  time

from tensorflow import keras
model = keras.models.load_model(r'.\tools\0.9956.h5')

class Chen_someone():


    def __init__(self):
        self.s = requests.Session()
        self.email = '用户名'
        self.password = '密码'
        self.login_url = 'http://glidedsky.com/login'
        self.no_1_url = 'http://glidedsky.com/level/web/crawler-basic-1'
        self.no_2_url = 'http://glidedsky.com/level/web/crawler-basic-2?page={}'
        self.no_3_url = 'http://glidedsky.com/level/web/crawler-ip-block-1?page={}'
        self.no_3_1_url = 'http://glidedsky.com/level/web/crawler-ip-block-2?page={}'
        self.no_4_url = 'http://glidedsky.com/level/web/crawler-font-puzzle-1?page={}'
        self.no_5_url = 'http://glidedsky.com/level/web/crawler-css-puzzle-1?page={}'
        self.no_6_url = 'http://glidedsky.com/level/web/crawler-captcha-1?page={}&ticket=t02pyMoJTzYKOhcDpPfE34zFF-B6TnOttYm5FqoTNphmP7NGNk3aPC-FfK_Vp60bVmuAIesYSxrWL8We9-acz-Jo5g_2LRedWGgS0bjQvmYH7N4TN8-dPfxHw**&rand_str=@3Cn'
        self.no_7_url = 'http://glidedsky.com/level/web/crawler-javascript-obfuscation-1?page={}'
        self.no_8_url = 'http://glidedsky.com/level/web/crawler-font-puzzle-2?page={}'
        self.no_12_url = 'http://glidedsky.com/level/web/crawler-sprite-image-1?page={}'
        self.no_13_url = 'http://glidedsky.com/level/web/crawler-sprite-image-2?page={}'


    def login(self):

        res = self.s.get(url=self.login_url)
        login_centent = res.text
        # with open('login.html', 'w', encoding='utf-8')as fp:
        #     fp.write(login_centent)
        token = re_value(content=login_centent, name='<input type="hidden" name="_token" value="(.*)">')
        print(f'_token: {token}')
        date = {
            '_token': token[0],
            'email': self.email,
            'password': self.password
        }
        res_2 = self.s.post(url=self.login_url, data=date)
        # with open('login_ok.html', 'w', encoding='utf-8')as fp:
        #     fp.write(res_2.text)

        # self.no_5()


    def no_1(self):
        content = self.s.get(url=self.no_1_url)
        with open('no_1.html', 'w', encoding='utf-8')as fp:
            fp.write(content.text)
        tree = etree.HTML(content.text)
        number = tree.xpath('//div[@class="col-md-1"]')
        list_sum = sum([int(i.text.replace(' ', '').replace('\n', '')) for i in number])
        print(list_sum)


    def no_2(self,):
        all_number = 0
        for i in  range(1,1001):
            content = self.s.get(url=self.no_2_url.format(i))
            tree = etree.HTML(content.text)
            number = tree.xpath('//div[@class="col-md-1"]')
            num_sum = sum([int(i.text.replace(' ', '').replace('\n', '')) for i in number])
            print(f'第 {i} 页， 数字总和为： {num_sum}')
            all_number += num_sum
            # time.sleep(random.randint(1,4))
        print(f'一千页数字总和为： {all_number}')


    def no_3(self):
        all_number = 0
        try:
            with open('no_3_1.txt', 'r', encoding='utf-8')as fp:
                text = fp.readlines()
            all_number = sum([int(i.replace(' ', '').replace('\n', '')) for i in text])
            start = len(text) + 1
        except:
            start = 1
        # print(start)
        for i in  range(start,1001):
            while True:
                try:
                    ip = requests.get('http://tpv.daxiangdaili.com/ip/?tid=559795625132464&num=1&filter=on')
                    print(ip.text)
                    proxy = {
                        'http': f'{ip.text}',
                        'https':f'{ip.text}'
                    }
                    print(f'第 {i} 页， 使用的IP为： {ip.text}')

                    # content = self.s.get(url=self.no_3_url.format(i),proxies = proxy,timeout = 2)
                    content = self.s.get(url=self.no_3_1_url.format(i),proxies = proxy,timeout = 2)
                    with open('no_3_1.html', 'w', encoding='utf-8')as fp:
                        fp.write(content.text)
                    content.raise_for_status()
                    break
                except :
                    print('代理不可用，重新切换')

            tree = etree.HTML(content.text)
            number = tree.xpath('//div[@class="col-md-1"]')
            num_sum = sum([int(i.text.replace(' ', '').replace('\n', '')) for i in number])
            print(f'第 {i} 页， 数字总和为： {num_sum}')
            with open('no_3_1.txt', 'a', encoding='utf-8')as fp:
                fp.write(f'{num_sum}\n')
            all_number += num_sum
            # time.sleep(1111111)
        print(f'一千页数字总和为： {all_number}')


    def no_4(self):
        all_number = 0
        for i in  range(1,1001):
            content = self.s.get(url=self.no_4_url.format(i))
            tree = etree.HTML(content.text)
            number = tree.xpath('//div[@class="col-md-1"]')
            base_info = tree.xpath('//style')[0].text.split('base64,')[1].split(') ')[0]
            print(base_info)
            num_list = [i.text.replace(' ', '').replace('\n', '') for i in number]
            num_sum = font_switch(base_info=base_info, number_info= num_list)
            print(f'第 {i} 页， 数字总和为： {num_sum}')
            all_number += num_sum
            # time.sleep(random.randint(1,4))
        print(f'一千页数字总和为： {all_number}')


    def no_5(self, ):
        all_number = 0
        for i in range(1, 1001):
            page_num = i
            print(f'=========={i}========')
            content = self.s.get(url=self.no_5_url.format(i))
            with open('no_5.html', 'w', encoding='utf-8')as fp:
                fp.write(content.text)
            tree = etree.HTML(content.text)
            number = tree.xpath('//div[@class="col-md-1"]')
            import re
            css_style = re.findall(r'\.(\w+).*? { (.*?) }',content.text)
            print(css_style)
            num_list =[]
            for i in number:
                num_dict = {}
                for j in range(1,len(i)+1):
                    # print(num_dict)
                    key_1 = i.xpath(f'./div[{j}]/@class')[0]
                    value_1 = i.xpath(f'./div[{j}]')[0].text
                    num_dict[key_1] = value_1
                    # print(num_dict)
                num_list.append(num_dict)
            # print(num_list)
            list_1 = get_css_style(style_list=css_style,num_dict=num_list)
            num_sum = sum([int(c) for c in list_1])
            print(f'第 {page_num} 页， 数字: {list_1}  总和为： {num_sum}')
            all_number += num_sum
            # time.sleep(random.randint(1,4))  2726303, 2809204  2612299 2528582
        print(f'一千页数字总和为： {all_number}')


    def no_6(self, ):
        from selenium import webdriver
        from selenium.webdriver import ActionChains

        brower = webdriver.Chrome()


        brower.get(self.login_url)
        brower.find_element_by_id('email').send_keys(self.email)
        brower.find_element_by_id('password').send_keys(self.password)
        brower.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
            "source": """
                            Object.defineProperty(navigator, 'webdriver', {
                              get: () => undefined
                            })
                          """
        })
        brower.find_element_by_xpath('//button[@class="btn btn-primary"]').click()
        all_number = 0
        try:
            with open('no_6.txt', 'r', encoding='utf-8')as fp:
                text = fp.readlines()
            all_number = sum([int(i.replace(' ', '').replace('\n', '')) for i in text])
            start = len(text) + 1
        except:
            start = 1
        for i in range(start, 1001):
            brower.get(url=self.no_6_url.format(i))
            move(brower,ActionChains)
            number = brower.find_elements_by_xpath('//div[@class="col-md-1"]')
            print()
            num_sum = sum([int(i.text.replace(' ', '').replace('\n', '')) for i in number])
            print(f'第 {i} 页， 数字总和为： {num_sum}')
            with open('no_6.txt', 'a', encoding='utf-8')as fp:
                fp.write(f'{num_sum}\n')
            all_number += num_sum
            time.sleep(random.randint(1,4))
        print(f'一千页数字总和为： {all_number}')


    def no_7(self):
        all_number = 0
        for i in range(1, 1001):
            content = self.s.get(url=self.no_7_url.format(i))
            tree = etree.HTML(content.text)
            t = str(int((int(tree.xpath('//div[@class="container"]/@t')[0])-99)/99))
            sha = hashlib.sha1(('Xr0Z-javascript-obfuscation-1' + t).encode('utf-8'))
            sign = sha.hexdigest()
            url = f'http://glidedsky.com/api/level/web/crawler-javascript-obfuscation-1/items?page={i}&t={t}&sign={sign}'
            content = self.s.get(url=url)
            res_dict = content.text
            import json
            number = json.loads(res_dict)["items"]
            num_sum = sum([i for i in number])
            print(f'第 {i} 页， 数字总和为： {num_sum}')
            all_number += num_sum
            # time.sleep(random.randint(1,4))
        print(f'一千页数字总和为： {all_number}')


    def font_2(self,i):
        content = self.s.get(url=self.no_8_url.format(i))
        tree = etree.HTML(content.text)
        with open('29.html', 'w', encoding='utf-8')as fp:
            fp.write(content.text)
        number = tree.xpath('//div[@class="col-md-1"]')
        base_info = tree.xpath('//style')[0].text.split('base64,')[1].split(') ')[0]
        # print(base_info)
        num_list = [i.text.replace(' ', '').replace('\n', '') for i in number]
        # print(num_list)
        try:
            num_sum = font_switch_2(base_info=base_info, number_info=num_list)
        except Exception as e:
            print(f'错误信息为：{e}')
            num_sum = self.font_2(i)
        return num_sum



    def no_8(self):
        all_number = 0
        for i in range(1, 1001):
            num_sum = self.font_2(i)
            print(f'第 {i} 页， 数字总和为： {num_sum}')
            all_number += num_sum
            # time.sleep(random.randint(1,4))
        print(f'一千页数字总和为： {all_number}')


    def no_12(self): #TODO 2806723 2806670 |  2806733 2806733 2806733 2806733 2806733
        all_number = 0
        for x in range(1, 1001):
            content = self.s.get(url=self.no_12_url.format(x))
            html = content.text
            tree = etree.HTML(html)
            base_info = tree.xpath('//style')[0].text
            # print(f'base_info : {base_info}')
            # 获取每一组数字对应的值
            number = tree.xpath('//div[@class="col-md-1"]')
            num_list =[]
            for i in number:
                num_ = []
                for j in range(1,len(i)+1):
                    key_1 = i.xpath(f'./div[{j}]/@class')[0]
                    num_.append(key_1)
                num_list.append(num_)
            print(f'num_list : {num_list}')
            new_number_list = xue_bi_1(base_info,num_list)
            num_sum = sum(new_number_list)
            print(f'第 {x} 页， 数字总和为： {num_sum}')
            all_number += num_sum
            # time.sleep(random.randint(1,4))
        print(f'一千页数字总和为： {all_number}')


    def  no_13(self):
        all_number = 0
        try:
            with open('no_13.txt', 'r', encoding='utf-8')as fp:
                text = fp.readlines()
            all_number = sum([int(i.replace(' ', '').replace('\n', '')) for i in text])
            start = len(text) + 1
        except:
            start = 1
        # print(start)
        for x in range(start, 1001):
            content = self.s.get(url=self.no_13_url.format(x))
            html = content.text
            with open('no_13.html', 'w', encoding='utf-8')as fp:
                fp.write(content.text)
            tree = etree.HTML(html)
            base_info = tree.xpath('//style')[0].text
            # print(f'base_info : {base_info}')
            # 获取每一组数字对应的值
            number = tree.xpath('//div[@class="col-md-1"]')
            num_list = []
            for i in number:
                num_ = []
                for j in range(1, len(i) + 1):
                    key_1 = i.xpath(f'./div[{j}]/@class')[0].replace(' sprite','')
                    num_.append(key_1)
                num_list.append(num_)
            print(f'num_list : {num_list}')
            new_number_list = xue_bi_2(base_info, num_list)

            num_sum = sum(new_number_list)
            print(f'第 {x} 页， 数字总和为： {num_sum}')
            with open('no_13.txt', 'a', encoding='utf-8')as fp:
                fp.write(f'{num_sum}\n')
            all_number += num_sum
            # time.sleep(random.randint(1,4))
        print(f'一千页数字总和为： {all_number}')


if __name__ == '__main__':
    chen_someone = Chen_someone()
    chen_someone.login()
    # chen_someone.no_3()
    chen_someone.no_13()
