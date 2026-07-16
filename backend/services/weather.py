import requests

from config import WEATHER_API_KEY


class WeatherService:

    BASE_URL = "http://api.weatherapi.com/v1/forecast.json"

    def get_weather(self, latitude, longitude):

        url = (
            f"{self.BASE_URL}"
            f"?key={WEATHER_API_KEY}"
            f"&q={latitude},{longitude}"
            f"&days=5"
            f"&aqi=no"
            f"&alerts=no"
        )

        response = requests.get(url)

        response.raise_for_status()

        return response.json()


weather_service = WeatherService()