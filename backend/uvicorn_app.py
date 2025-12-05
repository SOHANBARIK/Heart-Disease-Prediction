# uvicorn_app.py  (modified)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from joblib import load
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="Heart Disease Prediction API", description="Predict heart disease using FastAPI")

# allow React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # dev only; add production origin later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HeartDiseaseRequest(BaseModel):
    age:int
    sex:int
    cp:int
    trestbps:int
    chol:int
    fbs:int
    restecg:int
    thalach:int
    exang:int
    oldpeak:float
    slope:int
    ca:int
    thal:int

model_path = "./models/heart_model.joblib"
model = load(model_path)

@app.get("/")
def home():
    return {"message":"Welcome to Heart Disease Prediction API!"}

@app.post("/predict")
def predict(input_data: HeartDiseaseRequest):
    features = [
        input_data.age, input_data.sex, input_data.cp, input_data.trestbps,
        input_data.chol, input_data.fbs, input_data.restecg, input_data.thalach,
        input_data.exang, input_data.oldpeak, input_data.slope, input_data.ca,
        input_data.thal
    ]
    prediction = model.predict([features])[0].item()
    probability = model.predict_proba([features])[0][1].item()
    return {"prediction": prediction, "probability": probability}

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)
