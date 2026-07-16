from pathlib import Path
from huggingface_hub import hf_hub_download

# ==========================================================
# Hugging Face Repository
# ==========================================================

REPO_ID = "Gopal2006/climate-models"

# ==========================================================
# Local Model Folder
# ==========================================================

MODEL_DIR = Path(__file__).parent / "models"

MODEL_DIR.mkdir(exist_ok=True)

# ==========================================================
# Files to Download
# ==========================================================

FILES = [
    "MaxTemp_Model.pkl",
    "MinTemp_Model.pkl",
    "Rainfall_Model.pkl",
    "ClimateNet.pth",
    "Scaler.pkl"
]

# ==========================================================
# Download Function
# ==========================================================

def download_models():

    print("=" * 70)
    print("Checking AI Models...")
    print("=" * 70)

    for filename in FILES:

        local_file = MODEL_DIR / filename

        if local_file.exists():

            print(f"✓ {filename} already exists.")

        else:

            print(f"Downloading {filename}...")

            hf_hub_download(

                repo_id=REPO_ID,

                filename=filename,

                local_dir=MODEL_DIR,

            )

            print(f"✓ {filename} downloaded.")

    print("=" * 70)
    print("All models are ready.")
    print("=" * 70)