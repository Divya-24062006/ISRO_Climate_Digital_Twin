class RiskEngine:

    def analyze(self, simulation):

        max_rainfall = max(day["rainfall"] for day in simulation)
        max_temperature = max(day["max_temperature"] for day in simulation)
        min_rainfall = min(day["rainfall"] for day in simulation)

        # -------------------------------
        # Flood Risk
        # -------------------------------

        if max_rainfall >= 150:
            flood = "High"

        elif max_rainfall >= 80:
            flood = "Medium"

        else:
            flood = "Low"

        # -------------------------------
        # Heatwave Risk
        # -------------------------------

        if max_temperature >= 42:
            heatwave = "High"

        elif max_temperature >= 37:
            heatwave = "Medium"

        else:
            heatwave = "Low"

        # -------------------------------
        # Drought Risk
        # -------------------------------

        if min_rainfall <= 20:
            drought = "High"

        elif min_rainfall <= 50:
            drought = "Medium"

        else:
            drought = "Low"

        return {

            "flood_risk": flood,

            "heatwave_risk": heatwave,

            "drought_risk": drought

        }


risk_engine = RiskEngine()