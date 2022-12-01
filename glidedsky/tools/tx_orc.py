
import re
import base64

from tencentcloud.common import credential
from tencentcloud.common.profile.client_profile import ClientProfile
from tencentcloud.common.profile.http_profile import HttpProfile
from tencentcloud.common.exception.tencent_cloud_sdk_exception import TencentCloudSDKException
from tencentcloud.ocr.v20181119 import ocr_client, models

secret_id = "AKIDd4E7jAJJyLUMyJxMWP1NTKtkMhkWYGDv"
secret_key = "avzlJdgRw97qHRO5Vf6HBn8E2ZnEQKwH"


def get_tencent_reg(img_file_dir):
    try:
        with open(img_file_dir, 'rb') as f:
            img_data = f.read()
        img_base64 = base64.b64encode(img_data)
        params = '{"ImageBase64":"' + str(img_base64, 'utf-8') + '"}'
        # print(params)
        cred = credential.Credential(secret_id, secret_key)
        httpProfile = HttpProfile()
        httpProfile.endpoint = "ocr.tencentcloudapi.com"

        clientProfile = ClientProfile()
        clientProfile.httpProfile = httpProfile

        client = ocr_client.OcrClient(cred, "ap-guangzhou", clientProfile)

        req = models.GeneralBasicOCRRequest()
        req.from_json_string(params)
        resp = client.GeneralBasicOCR(req).to_json_string()
        ret_list = re.findall( r'"DetectedText": "(.*?)"', resp)
        return ret_list[0]


    except TencentCloudSDKException as err:
        print(err)
        return -1, []

# a = get_tencent_reg(r'E:\chen_somene\爬虫闯关\img\new_number.png')
# print(a)