 const getWeather = async (loc, setweatherData, setAIData, setLoading) => {
      if (loc.latitude && loc.longitude) {
        setLoading(true);
        try {
          const res = await fetch("http://localhost:3000/location", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              latitude: loc.latitude,
              longitude: loc.longitude,
            }),
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
export default getWeather
