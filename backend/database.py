import sqlite3

from config import DATABASE_PATH


connection = sqlite3.connect(
    DATABASE_PATH,
    check_same_thread=False
)

cursor = connection.cursor()

cursor.execute("""

CREATE TABLE IF NOT EXISTS history(

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    latitude REAL,

    longitude REAL,

    day INTEGER,

    source TEXT,

    simulation_days INTEGER,

    rainfall REAL,

    max_temperature REAL,

    min_temperature REAL,

    climate_health INTEGER,

    flood_risk TEXT,

    heatwave_risk TEXT,

    drought_risk TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)

""")

connection.commit()

print("="*70)
print("Database Ready")
print("="*70)