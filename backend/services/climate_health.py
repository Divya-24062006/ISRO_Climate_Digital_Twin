class ClimateHealthEngine:

    def calculate(self, risk):

        score = 100

        penalties = {

            "Low": 5,

            "Medium": 15,

            "High": 30

        }

        score -= penalties[risk["flood_risk"]]

        score -= penalties[risk["heatwave_risk"]]

        score -= penalties[risk["drought_risk"]]

        score = max(score, 0)

        return score


climate_health_engine = ClimateHealthEngine()