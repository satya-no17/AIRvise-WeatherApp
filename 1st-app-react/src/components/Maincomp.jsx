import React from 'react';
import './main.css';

const Main = ({ modes, weatherData, accLoc, AIData, loading }) => {
  let backgroundVideos = {
    "Clear Sky": "/src/assets/clear-sky.mp4",
    "Few Clouds": "/src/assets/few-clouds.mp4",
    "Scattered Clouds": "/src/assets/scattered-clouds.mp4",
    "Broken Clouds": "/src/assets/broken-clouds.mp4",
    "Shower Rain": "/src/assets/shower-rain.mp4",
    "Rain": "/src/assets/rain.mp4",
    "Thunderstorm": "/src/assets/thunderstorm.mp4",
    "Snow": "/src/assets/snow.mp4",
    "Mist": "/src/assets/mist.mp4",
    "Unknown Weather": "/src/assets/default.mp4"
  };

  const getWeatherText = (iconCode) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        return "Clear Sky";
      case "02d":
      case "02n":
        return "Few Clouds";
      case "03d":
        return "Scattered Clouds";
      case "04d":
        return "Broken Clouds";
      case "09d":
        return "Shower Rain";
      case "10d":
      case "10n":
        return "Rain";
      case "11d":
        return "Thunderstorm";
      case "13d":
        return "Snow";
      case "50d":
        return "Mist";
      default:
        return "Unknown Weather";
    }
  };

  const weatherType = getWeatherText(weatherData?.weather?.iconCode);
  const videoSrc = backgroundVideos[weatherType] || backgroundVideos["Unknown Weather"];

  return (
    <div className={modes ? "dark" : "light"}>
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
        src={videoSrc}
      />
      <div className={`loadingscreen ${loading ? "load" : ""}`}>Fetching Current Location......</div>
      <div className='maincomp'>
        <div className="weatherpart">
          <div className="location">
            <p>
              Result for {weatherData?.location?.city}, {weatherData?.location?.state}
            </p>
            <div className="changeLocation" onClick={accLoc}>
              <pre> <i className="fa-solid fa-location-crosshairs"></i> Current location  </pre>
            </div>
          </div>
          <div className="weather">
            <div className="weathersection">
              <div className="accWeather">
                {weatherData?.weather?.temperature}
              </div>
              <div className="clouds">
                <p>{getWeatherText(weatherData?.weather?.iconCode)}</p>
              </div>
              <div className="condition">
                <p className='wind'>WIND: {weatherData?.weather?.windSpeed}</p>
                <p className='humidity'>humidity: {weatherData?.weather?.humidity}</p>
              </div>
            </div>
            <div className="AQIpart">
              <div className="detailsofAQI">
                <h2>AQI</h2>
                <p>{weatherData?.pollution?.AQI_US}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="aipart">
          <div className="aihead">
            <h1>AIRvise AI analysis</h1>
          </div>
          <div className="summary">
            <h3>Health Impact Sumarry</h3>
            <p>{AIData ? AIData[0] :"loading health advice"} </p>
          </div>
          <div className="summary">
            <h3>Safety Tips</h3>
            <p>{AIData ? AIData[1]:"loading safety tips"}</p>
          </div>
          <div className="summary">
            <h3>Personalised Air Advice</h3>
            <p>{AIData?AIData[2]:"loadingPersonalised Air Advice"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
