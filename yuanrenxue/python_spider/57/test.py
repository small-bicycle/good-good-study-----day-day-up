"""
-*- coding: utf-8 -*-
@Time : 2023/1/9 15:11
@Author : Logan
@File : test.py
@Comment : 
"""
import pyDes
import base64

def encrypt(data):
    '''
    加密
    '''
    key = 'aiding88'  # 密钥,一般是8位或16位
    # key = "kkk11111"  # 加密key,加密方式ECB秘钥必须是八位字节
    # mode = pyDes.ECB  # 加密方式 默认是ECB,也可以不填写
    # IV = "00000000"  # 偏移量,加密方式不是ECB的时候加密key字段必须是16位字节,秘钥不够用0补充
    k = pyDes.des(key, pad=None, padmode=pyDes.PAD_PKCS5)  # 传入秘钥,加密方式
    d = k.encrypt(data)  # 加密数据
    base = str(base64.b64encode(d), encoding="utf-8")  # 指定输出格式为base64
    print(base)


def decrypt_py(data, secretkey):
    '''
    解密
    '''
    des_obj = pyDes.des(secretkey, secretkey, padmode=pyDes.PAD_PKCS5)

    decodebs64data = base64.b64decode(data)

    return  des_obj.decrypt(decodebs64data).decode('utf-8')

if __name__ == '__main__':
    #TODO 解密
    result = 'JPUAptuWLJajvxhplrh5NI1DaDwsjIvbw2Q+mPsG+Ohnx7jKMffjnX932lXY3G/7Lt+RuIt9N9fiF7Mznaof+y6UmUdIinbEoVDrwBFAxmjKrUec3q5vMlG+yxmlN/Cs769kygg35dybz5/rwkei3sC94EFTZYnMIKc9MSd6KpgcER2/oJyOpeg5Z1ass7xE1BQ3aY+G9a3ZaYALTWpgoMTOFcHtH+XzrqqinZkFs0lSX4Qb6llch6UGjlTmSpBtDFr/D2RNB+v/ZneHvwNMN7nwNz4KdPJA/Qx0LQV0N9fiF7MznarR1itrzR17N3bEoVDrwBFAsLjB3NSbx2sovDe36dTozA=='
    key_str = result[0:8]
    print(key_str)
    decrypt_str = result[8::]
    print(decrypt_str)
    decrypt_py(data=decrypt_str, secretkey=key_str)
    # TODO 加密
    decrypt_str = '1'
    uc = encrypt(data=decrypt_str)
    print(uc)
