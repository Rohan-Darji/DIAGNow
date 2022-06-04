from ..model_class.ecg_class import ECGClass
import torch
import numpy as np
import pandas as pd

PATH = 'models/ecg_model.pth'

model = ECGClass()
device = torch.device('cpu')
model.load_state_dict(torch.load(PATH, map_location=device))

def predict(inference_loader):

  model.eval()
  for _, data in enumerate(inference_loader, 0):
    image = data['image'].to(device)
    outputs = model(image)
    preds = torch.sigmoid(outputs).cpu().detach().numpy().tolist()

  preds = np.array(preds) >= 0.5

  return preds


def get_predictions(inference_loader):
    
    preds = predict(inference_loader)

    if preds[0][0]:
      output = 'Myocardial Infarction'
    else:
      output = 'Normal'

    return output