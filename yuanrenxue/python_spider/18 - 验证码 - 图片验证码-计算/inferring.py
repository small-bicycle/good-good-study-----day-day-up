from torch import load
import torch
from torchvision import transforms
from MyModels import ResNetLstm
import itertools
from PIL import Image


class ImageModel:

    def __init__(self):
        self.mapping = [i for i in '_0123456789加减乘+-*']
        # 实例化模型
        self.model = ResNetLstm((50, 150))
        # 加载已经训练好的模型和优化器继续进行训练
        self.model.load_state_dict(load("./models/model.pkl"))

        self.smy_transforms = transforms.Compose(
            [
                transforms.ToTensor(),
                transforms.Normalize(mean=(0.9238877, 0.9249362, 0.9240683), std=(0.2109205, 0.20895848, 0.2106626))
            ]
        )

        self.model.eval()

    def verfiy_png(self, img):
        images = self.smy_transforms(Image.open(img))
        images = images.unsqueeze(0)
        with torch.no_grad():
            output = self.model(images)
            # 通过结果计算损失
            output = output.permute(1, 0, 2)  # [batch, time_step, class_num]
            output_result = output[0, :, :]
            output_result = output_result.max(-1)[-1]
            output_s = [self.mapping[i[0]] for i in itertools.groupby(output_result.cpu().numpy()) if i[0] != 0]
            result = ''.join(output_s).replace('加', '+').replace('减', '-').replace('乘', '*')
            print(f'result=> {result}')
            resp = eval(result, {"__builtins__": {}}, {})
            return resp
