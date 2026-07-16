class SimulationEngine:

    def simulate(

        self,
        base_data,
        days,
        rainfall_change,
        temperature_change

    ):

        # =====================================
        # Initial Climate (Predicted Climate)
        # =====================================

        rainfall = float(base_data["rainfall"])
        max_temp = float(base_data["max_temperature"])
        min_temp = float(base_data["min_temperature"])

        forecast = []

        rainfall_factor = rainfall_change / 100.0

        for day in range(days):

            # =====================================
            # Rainfall Simulation
            # =====================================

            # Keep rainfall at 0 if prediction is 0
            if rainfall == 0:

                simulated_rainfall = max(
                    0,
                    (rainfall_change * 0.05) + (day * 0.15)
                )

            else:

                scenario_effect = rainfall * rainfall_factor * 0.10

                seasonal_trend = (day + 1) * 0.15

                simulated_rainfall = rainfall + scenario_effect + seasonal_trend

            simulated_rainfall = round(

                max(0, simulated_rainfall),

                2

            )

            # =====================================
            # Temperature Simulation
            # =====================================

            # Rainfall cools temperature slightly
            cooling = simulated_rainfall * 0.01

            simulated_max = (

                max_temp

                + (temperature_change * 0.12)

                - cooling

            )

            simulated_min = (

                min_temp

                + (temperature_change * 0.10)

                - (cooling * 0.50)

            )

            simulated_max = round(simulated_max, 2)

            simulated_min = round(simulated_min, 2)

            # =====================================
            # Store Day
            # =====================================

            forecast.append({

                "day": day + 1,

                "rainfall": simulated_rainfall,

                "max_temperature": simulated_max,

                "min_temperature": simulated_min

            })

            # =====================================
            # Next Day starts from today
            # =====================================

            rainfall = simulated_rainfall

            max_temp = simulated_max

            min_temp = simulated_min

        return forecast


simulation_engine = SimulationEngine()