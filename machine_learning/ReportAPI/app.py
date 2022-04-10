from fastapi import FastAPI, File
from src import chest_data, chest_model, ecg_data, ecg_model
import pandas as pd 
import starlette.responses as _responses

app = FastAPI()

@app.get("/", tags=["Root"])
async def root():
    return _responses.RedirectResponse("/redoc")

@app.post("/chest", tags=["Chest X Ray"])
async def chest(file: bytes = File(...)):
  with open('image/image.jpg','wb') as image:
        image.write(file)
        image.close()
  df = {
    'image': ['image.jpg']
  }
  df = pd.DataFrame(df)
  
  inference_loader = chest_data.data_loader(df)

  preds = chest_model.get_predictions(inference_loader)

  return {
    'diseases': preds
  }

@app.post("/ecg", tags=["ECG"])
async def ecg(file: bytes = File(...)):
  with open('image/image.jpg','wb') as image:
        image.write(file)
        image.close()
  df = {
    'image': ['image.jpg']
  }
  df = pd.DataFrame(df)
  
  inference_loader = ecg_data.data_loader(df)

  pred = ecg_model.get_predictions(inference_loader)

  return {
    'diseases': pred
  }