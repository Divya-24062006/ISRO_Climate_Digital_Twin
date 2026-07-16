from download_models import download_models
download_models()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services import risk
from services.weather import weather_service
from schemas import PredictionRequest
from services.prediction import prediction_engine
from services.simulation import simulation_engine
from schemas import SimulationRequest
from services.risk import risk_engine
from services.recommendation import recommendation_engine
from services.climate_health import climate_health_engine
from services.history import history_service
from services.analytics import analytics_service
from fastapi import HTTPException

app=FastAPI()
app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:5173",

        "http://127.0.0.1:5173"

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)


@app.get("/")
def home():

    return {
        "message": "AI Climate Digital Twin Backend Running Successfully"
    }


@app.post("/predict")
def predict(data: PredictionRequest):
    print("="*50)
    print(data)
    print(data.latitude)
    print(data.longitude)
    print(data.day)
    print("="*50)

    prediction = prediction_engine.predict(
        latitude=data.latitude,
        longitude=data.longitude,
        day=data.day
    )

    weather = weather_service.get_weather(
        data.latitude,
        data.longitude
    )

    forecast = weather["forecast"]["forecastday"][0]["day"]

    weather_prediction = {

        "rainfall": forecast["totalprecip_mm"],

        "max_temperature": forecast["maxtemp_c"],

        "min_temperature": forecast["mintemp_c"]

    }

    difference = {

        "rainfall":
            round(
                prediction["rainfall"] -
                weather_prediction["rainfall"],
                2
            ),

        "max_temperature":
            round(
                prediction["max_temperature"] -
                weather_prediction["max_temperature"],
                2
            ),

        "min_temperature":
            round(
                prediction["min_temperature"] -
                weather_prediction["min_temperature"],
                2
            )

    }

    return {

        "prediction": prediction,

        "weather": weather_prediction,

        "difference": difference

    }
@app.post("/simulate")
def simulate(data: SimulationRequest):

    # ==========================================
    # STEP 1 : AI Prediction
    # ==========================================

    prediction = prediction_engine.predict(

        latitude=data.latitude,

        longitude=data.longitude,

        day=data.day

    )

    # ==========================================
    # STEP 2 : Current Weather
    # ==========================================

    weather = weather_service.get_weather(

        data.latitude,

        data.longitude

    )

    forecast = weather["forecast"]["forecastday"][0]["day"]

    weather_data = {

        "rainfall": forecast["totalprecip_mm"],

        "max_temperature": forecast["maxtemp_c"],

        "min_temperature": forecast["mintemp_c"]

    }

    # ==========================================
    # STEP 3 : Select Base Climate
    # ==========================================

    if data.simulation_type == "prediction":

        base = prediction

    else:

        base = weather_data

    # ==========================================
    # STEP 4 : Run Simulation
    # ==========================================

    simulation = simulation_engine.simulate(

        base,

        data.simulation_days,

        data.rainfall_change,

        data.temperature_change

    )

    # Safety check
    if len(simulation) == 0:

        raise HTTPException(

            status_code=500,

            detail="Simulation engine returned empty forecast."

        )

    # ==========================================
    # STEP 5 : Final Climate
    # ==========================================

    final_day = simulation[-1]

    # ==========================================
    # STEP 6 : Average Climate
    # ==========================================

    avg_rainfall = round(

        sum(day["rainfall"] for day in simulation)

        / len(simulation),

        2

    )

    avg_max = round(

        sum(day["max_temperature"] for day in simulation)

        / len(simulation),

        2

    )

    avg_min = round(

        sum(day["min_temperature"] for day in simulation)

        / len(simulation),

        2

    )

    # ==========================================
    # STEP 7 : Risk Analysis
    # ==========================================

    risk = risk_engine.analyze(simulation)

    health = climate_health_engine.calculate(risk)

    recommendation = recommendation_engine.generate(risk)

    # ==========================================
    # STEP 8 : Save History
    # ==========================================

    history_service.save(

        latitude=data.latitude,

        longitude=data.longitude,

        day=data.day,

        source=data.simulation_type,

        simulation_days=data.simulation_days,

        base=base,

        health=health,

        risk=risk

    )

    # ==========================================
    # STEP 9 : Response
    # ==========================================

    return {

        "base": base,

        "final": final_day,

        "average": {

            "rainfall": avg_rainfall,

            "max_temperature": avg_max,

            "min_temperature": avg_min,

        },

        "simulation": simulation,

        "risk": risk,

        "climate_health_score": health,

        "recommendations": recommendation

    } 
@app.get("/history")

def history():

    return history_service.get_all()
@app.delete("/history/{id}")

def delete_history(id:int):

    history_service.delete(id)

    return {

        "message":"History Deleted"

    }

@app.delete("/history")

def delete_all_history():

    history_service.delete_all()

    return {

        "message": "All history deleted."

    }

@app.get("/analytics")

def analytics():

    return analytics_service.summary()

@app.get("/analytics/charts")
def charts():

    rows = history_service.get_all()

    chart_data = []

    for row in reversed(rows):

        chart_data.append({

            "simulation": len(chart_data) + 1,

            "rainfall": row[6],

            "max_temperature": row[7],

            "min_temperature": row[8],

            "climate_health": row[9]

        })

    return chart_data