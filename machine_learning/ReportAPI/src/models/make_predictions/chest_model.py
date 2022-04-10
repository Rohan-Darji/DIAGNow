from ..model_class.chest_class import XRayClass
import torch
import numpy as np
import pandas as pd

PATH = 'models/chest_model.pth'

model = XRayClass()
device = torch.device('cpu')
model.load_state_dict(torch.load(PATH, map_location=device))

def predict(inference_loader):

  model.eval()
  for _, data in enumerate(inference_loader, 0):
    image = data['image'].to(device)
    outputs = model(image)
    preds = torch.sigmoid(outputs).cpu().detach().numpy().tolist()
  
  preds = np.array(preds) >= 0.15

  return preds


def get_predictions(inference_loader):
    
    preds = predict(inference_loader)

    labels = ['Atelectasis', 'Cardiomegaly', 'Consolidation', 'Edema', 'Effusion', 'Emphysema', 'Fibrosis', 'Hernia', 'Infiltration', 'Mass', 'No Finding', 'Nodule', 'Pleural_Thickening', 'Pneumonia', 'Pneumothorax']
    output = []
    for i in range(len(labels)):
      if preds[0][i] and labels[i] != 'No Finding':
        output.append(labels[i])
    


    return output