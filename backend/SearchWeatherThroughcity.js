let city = "Ranchi";

const searchResult = async (city) => {
  const KEY = process.env.OW_KEY;
  const IQ_API = process.env.IQ_API;

  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${KEY}&units=metric`
  );
  const weatherData = await weatherRes.json();
  if (!weatherRes.ok || !weatherData.coord) {
    throw new Error(`OpenWeather API Error: ${weatherData.message || "Invalid response"}`);
  }
  const lon = weatherData.coord.lon;
  const lat = weatherData.coord.lat;

  const AQIres = await fetch(
    `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${IQ_API}`
  );
  const AQIdata = await AQIres.json();
  if (!AQIres.ok || !AQIdata.data?.current?.pollution) {
    throw new Error(`AirVisual API Error: ${AQIdata.message || "Invalid response"}`);
  }

  const pollution = AQIdata.data.current.pollution;

  const fullData = {
    location: {
      city: weatherData.name || "Unknown",
      state: AQIdata.data.state || null,
      country: weatherData.sys.country || "IN",
      coordinates: [lon, lat],
    },
    weather: {
      temperature: weatherData.main.temp + " °C",
      pressure: weatherData.main.pressure + " hPa",
      humidity: weatherData.main.humidity + " %",
      windSpeed: Math.round(weatherData.wind.speed * 3.6) + " km/hr",
      windDirection: weatherData.wind.deg + "°",
      iconCode: weatherData.weather[0].icon,
      time: new Date(weatherData.dt * 1000).toISOString(),
    },
    pollution: {
      AQI_US: pollution.aqius,
      mainPollutant_US: pollution.mainus,
      AQI_CN: pollution.aqicn,
      mainPollutant_CN: pollution.maincn,
      time: pollution.ts,
    },
  };

  return fullData;
};

export default searchResult;


