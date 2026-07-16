from pydantic import BaseModel


class PredictionRequest(BaseModel):
    latitude: float
    longitude: float
    day: int


class PredictionResponse(BaseModel):
    rainfall: float
    max_temperature: float
    min_temperature: float

class SimulationRequest(BaseModel):

    latitude: float

    longitude: float

    day: int

    simulation_type: str

    simulation_days: int

    rainfall_change: float

    temperature_change: float