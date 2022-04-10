import torch
from torch.utils.data import Dataset
import torchvision.transforms as T
from PIL import Image
import torchvision.transforms as T
import cv2

transforms = T.Compose([
                       T.ToPILImage(), 
                       T.Resize((224, 224)),
                       T.ToTensor(),
                       T.Normalize(
                                   mean=[0.485, 0.456, 0.406],
                                   std=[0.229, 0.224, 0.225]
                                   )
                      ])

# Creating Dataset and DataLoader for neural net

class ECGDataset(Dataset):

    def __init__(self, dataframe):
        self.transform = transforms
        self.data = dataframe
        self.image = dataframe.image

    def __len__(self):
        return len(self.image)

    def __getitem__(self, index):
        image = cv2.imread(f'image/{self.image[index]}')
        image = self.transform(image)

        return {
            'image': image
        }