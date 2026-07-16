from pathlib import Path

PROJECT_ROOT = Path(__file__).parent

MODEL_DIR = PROJECT_ROOT / "models"

DATA_DIR = PROJECT_ROOT / "data"

DATABASE_PATH = DATA_DIR / "history.db"

WEATHER_API_KEY = "6e56f1e936b9441fa7a124308260507"

print("=" * 70)
print("Configuration Loaded Successfully")
print("=" * 70)
print("Project :", PROJECT_ROOT)
print("Models  :", MODEL_DIR)
print("=" * 70)