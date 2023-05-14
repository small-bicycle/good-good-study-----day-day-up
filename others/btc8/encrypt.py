"""
@File  : encrypt.py
@Author: YuanMing
@Email : 15797642529@163.com
@Date  :  2021/10/11
@Desc  :  
"""
from Crypto.Cipher import AES
import base64
import requests


class EncryptClass:
    def add_to_16(self, s):
        while len(s) % 16 != 0:
            # s += (16 - len(s) % 16) * chr(16 - len(s) % 16)
            s += '\0'
        return str.encode(s)  # 返回bytes

    def encry(self, text, key='WTAHAPPYACTIVITY'):
        aes = AES.new(str.encode(key), AES.MODE_ECB)  # 初始化加密器，本例采用ECB加密模式
        print(aes)
        encrypted_text = str(base64.encodebytes(aes.encrypt(self.add_to_16(text))), encoding='utf8').replace('\n','')  # 加密
        encrypted_text = encrypted_text.replace('/', "_").replace('+', "-")  # ddd.replace(/\//g, "^")
        return encrypted_text


"""
gDt1nQ3Ay458FG_Xj-Aum7njy6mzwqsE5_

TH7Gnij6XBvJRQoAdZXI3k1WttASOW

TWeDNrlOJirimPSo2PO0DQ==
"""