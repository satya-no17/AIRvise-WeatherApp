const getWeatherThroughCity = async (
  city,
  setweatherData,
  setAIData,
  setLoading
) => {
  if (city) {
    setLoading(true);
    try {
      const res = await fetch("https://weather-backend-xev9.onrender.com/CityWeather", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ city: typeof city === "object" && city !== null ? city.value : city }),
      });

      if (!res.ok) {
        throw new Error("Weather data fetch failed");
      }

      const weatherRES = await res.json();
      console.log(weatherRES);
      setweatherData(weatherRES.weather);
      setAIData(weatherRES.advice);
    } catch (error) {
      console.error("Weather fetch error:", error);
    } finally {
      setLoading(false);
    }
  }
};
export default getWeatherThroughCity;
