"""
@File  : tools_config.py
@Author: YuanMing
@Date  :  2022/4/12
@Desc  :  
"""
import re
import requests

class Smallbike():
    def __init__(self):
        self.s = requests.Session()
        self.email = '1782213776@qq.com'
        self.password = 'yuanming'
        self.login_url = 'http://glidedsky.com/login'

    def login(self):
        """
        登陆账号
        :return:
        """
        res = self.s.get(url=self.login_url)
        login_centent = res.text
        token = re_value(content=login_centent, name='<input type="hidden" name="_token" value="(.*)">')
        print(f'_token: {token}')
        date = {
            '_token': token[0],
            'email': self.email,
            'password': self.password
        }
        self.s.post(url=self.login_url, data=date)

def re_value(content,name):
    '''
    :return: 返回value
    '''

    presult1 = re.compile(name)
    value_1 = presult1.findall(content)
    return value_1
Smallbike = Smallbike()
Smallbike.login()