from database import connection

class HistoryService:

    def save(

        self,

        latitude,

        longitude,

        day,

        source,

        simulation_days,

        base,

        health,

        risk

    ):

        cursor = connection.cursor()

        cursor.execute("""

        INSERT INTO history(

        latitude,

        longitude,

        day,

        source,

        simulation_days,

        rainfall,

        max_temperature,

        min_temperature,

        climate_health,

        flood_risk,

        heatwave_risk,

        drought_risk

        )

        VALUES(?,?,?,?,?,?,?,?,?,?,?,?)

        """,(

            latitude,

            longitude,

            day,

            source,

            simulation_days,

            base["rainfall"],

            base["max_temperature"],

            base["min_temperature"],

            health,

            risk["flood_risk"],

            risk["heatwave_risk"],

            risk["drought_risk"]

        ))

        connection.commit()

    def get_all(self):

        cursor=connection.cursor()

        cursor.execute("""

        SELECT * FROM history

        ORDER BY id DESC

        """)

        return cursor.fetchall()

    def delete(self,id):

        cursor=connection.cursor()

        cursor.execute(

            "DELETE FROM history WHERE id=?",

            (id,)

        )

        connection.commit()

    def delete_all(self):

        cursor = connection.cursor()

        cursor.execute(

        "DELETE FROM history"

    )

    connection.commit()

history_service=HistoryService()