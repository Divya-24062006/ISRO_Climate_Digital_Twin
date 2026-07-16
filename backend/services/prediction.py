import joblib
import pandas as pd

from config import MODEL_DIR

print("=" * 70)
print("Loading Machine Learning Models...")
print("=" * 70)

rainfall_model = joblib.load(MODEL_DIR / "Rainfall_Model.pkl")
print("✓ Rainfall Model Loaded")

max_temp_model = joblib.load(MODEL_DIR / "MaxTemp_Model.pkl")
print("✓ Maximum Temperature Model Loaded")

min_temp_model = joblib.load(MODEL_DIR / "MinTemp_Model.pkl")
print("✓ Minimum Temperature Model Loaded")

print("=" * 70)
print("All Models Loaded Successfully")
print("=" * 70)

class PredictionEngine:

    def predict(self, latitude, longitude, day):

        input_data = pd.DataFrame({
            "Latitude": [latitude],
            "Longitude": [longitude],
            "Day": [day]
        })

        rainfall = float(rainfall_model.predict(input_data)[0])

        max_temp = float(max_temp_model.predict(input_data)[0])

        min_temp = float(min_temp_model.predict(input_data)[0])

        return {
            "rainfall": round(rainfall, 2),
            "max_temperature": round(max_temp, 2),
            "min_temperature": round(min_temp, 2)
        }


prediction_engine = PredictionEngine()