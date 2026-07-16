from database import connection


class AnalyticsService:

    def summary(self):

        cursor = connection.cursor()

        # =====================================
        # Total Simulations
        # =====================================

        cursor.execute(
            "SELECT COUNT(*) FROM history"
        )

        total = cursor.fetchone()[0]

        # =====================================
        # Average Rainfall
        # =====================================

        cursor.execute(
            "SELECT AVG(rainfall) FROM history"
        )

        avg_rainfall = cursor.fetchone()[0] or 0

        # =====================================
        # Average Maximum Temperature
        # =====================================

        cursor.execute(
            "SELECT AVG(max_temperature) FROM history"
        )

        avg_max = cursor.fetchone()[0] or 0

        # =====================================
        # Average Minimum Temperature
        # =====================================

        cursor.execute(
            "SELECT AVG(min_temperature) FROM history"
        )

        avg_min = cursor.fetchone()[0] or 0

        # =====================================
        # Average Climate Health
        # =====================================

        cursor.execute(
            "SELECT AVG(climate_health) FROM history"
        )

        avg_health = cursor.fetchone()[0] or 0

        # =====================================
        # Highest Climate Health
        # =====================================

        cursor.execute(
            "SELECT MAX(climate_health) FROM history"
        )

        highest_health = cursor.fetchone()[0] or 0

        # =====================================
        # Lowest Climate Health
        # =====================================

        cursor.execute(
            "SELECT MIN(climate_health) FROM history"
        )

        lowest_health = cursor.fetchone()[0] or 0

        # =====================================
        # Prediction vs Weather
        # =====================================

        cursor.execute("""

            SELECT source, COUNT(*)

            FROM history

            GROUP BY source

        """)

        source_distribution = {}

        for source, count in cursor.fetchall():

            source_distribution[source] = count

        # =====================================
        # Flood Risk
        # =====================================

        cursor.execute("""

            SELECT flood_risk, COUNT(*)

            FROM history

            GROUP BY flood_risk

        """)

        flood_distribution = {}

        for risk, count in cursor.fetchall():

            flood_distribution[risk] = count

        # =====================================
        # Heatwave Risk
        # =====================================

        cursor.execute("""

            SELECT heatwave_risk, COUNT(*)

            FROM history

            GROUP BY heatwave_risk

        """)

        heatwave_distribution = {}

        for risk, count in cursor.fetchall():

            heatwave_distribution[risk] = count

        # =====================================
        # Drought Risk
        # =====================================

        cursor.execute("""

            SELECT drought_risk, COUNT(*)

            FROM history

            GROUP BY drought_risk

        """)

        drought_distribution = {}

        for risk, count in cursor.fetchall():

            drought_distribution[risk] = count

        return {

            "total_simulations": total,

            "average_rainfall": round(avg_rainfall, 2),

            "average_max_temperature": round(avg_max, 2),

            "average_min_temperature": round(avg_min, 2),

            "average_climate_health": round(avg_health, 2),

            "highest_health_score": round(highest_health, 2),

            "lowest_health_score": round(lowest_health, 2),

            "source_distribution": source_distribution,

            "flood_distribution": flood_distribution,

            "heatwave_distribution": heatwave_distribution,

            "drought_distribution": drought_distribution

        }


analytics_service = AnalyticsService()