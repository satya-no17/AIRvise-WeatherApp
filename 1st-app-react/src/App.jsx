import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Maincomp";
import Footer from "./components/Footer";
import getIP from "./utils/getIP";
import getAccurateLocation from "./utils/getAccurateLocation";
import getWeather from "./utils/fetchWeather";
import getWeatherThroughCity from "./utils/fetchWeatherThroughCity";
function App() {
  // usestate declaration
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modes, setModes] = useState(false);
  const [AIData, setAIData] = useState(null);
  const [city, setCity] = useState(null)
  const [weatherData, setweatherData] = useState(null);
  const [DesiredLocation, setDesiredLocation] = useState("")
  const [loc, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  // change function for dark and normal mode
  const changemode = () => {
    setModes(!modes);
  };

  //for default location
  useEffect(() => {
 getIP(setLocation)
  }, []);

  //for accurate location
const accLoc=()=>{getAccurateLocation(loc,setLocation,setRefreshTrigger)}
//for weather
useEffect(()=>{
  getWeather(loc, setweatherData, setAIData, setLoading);
  }, [loc.latitude, loc.longitude, refreshTrigger]);
//for input search
useEffect(() => {
getWeatherThroughCity( city,
  setweatherData,
  setAIData,
  setLoading)
}, [city])

  return (
    <div>
      <Navbar
      className="navapp"
        changemode={changemode}
        modes={modes}
        title={
          modes ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )
        }
        setCity={setCity}
      />
      <Main
        modes={modes}
        weatherData={weatherData}
        accLoc={accLoc}
        AIData={AIData}
        loading={loading}
      />
      <Footer modes={modes} />
    </div>
  );
}

export default App;
