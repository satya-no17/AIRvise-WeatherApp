const getWeather = async (longitude, latitude) => {
      const IQ_API = process.env.IQ_API;
  const AQIres = await fetch(
    `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${IQ_API}`
  );
  const AQIdata = await AQIres.json();
  // console.log(AQIdata)
  const weather = AQIdata.data.current.weather;
  const pollution = AQIdata.data.current.pollution;
  const fullData = {
    location: {
      city: AQIdata.data.city,
      state: AQIdata.data.state,
      country: AQIdata.data.country,
      coordinates: AQIdata.data.location.coordinates,
    },
    weather: {
      temperature: weather.tp + " °C",
      pressure: weather.pr + " hPa",
      humidity: weather.hu + " %",
      windSpeed: Math.round(weather.ws * 3.6) + " km/hr",
      windDirection: weather.wd + "°",
      iconCode: weather.ic,
      time: weather.ts,
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
export default getWeather