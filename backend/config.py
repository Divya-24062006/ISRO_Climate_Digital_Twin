from pathlib import Path

PROJECT_ROOT = Path(__file__).parent

MODEL_DIR = PROJECT_ROOT / "models"

DATA_DIR = PROJECT_ROOT / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

DATABASE_PATH = DATA_DIR / "history.db"

import os

WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")

print("=" * 70)
print("Configuration Loaded Successfully")
print("=" * 70)
print("Project :", PROJECT_ROOT)
print("Models  :", MODEL_DIR)
print("=" * 70)