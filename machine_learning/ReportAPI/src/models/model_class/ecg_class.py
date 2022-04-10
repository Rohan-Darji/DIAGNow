import torch
from torch import nn
from torchvision import models

device = torch.device('cpu')

class ECGClass(torch.nn.Module):
    def __init__(self, no_labels=1):
        super(ECGClass, self).__init__()
        resnet = models.resnet50(pretrained=False)
        resnet.load_state_dict(torch.load('models/pretrained/resnet50.pth', map_location=device))
                
        resnet.fc = nn.Sequential(
            nn.Dropout(p=0.2),
            nn.Linear(in_features=resnet.fc.in_features, out_features=no_labels)
        )
        self.base_model = resnet

    def forward(self, image):
        outputs = self.base_model(image)
        
        return outputs