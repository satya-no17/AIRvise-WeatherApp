import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AIdata from "./AIdata.js";
import getWeather from "./getWeather.js";
import searchResult from "./SearchWeatherThroughcity.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const IQ_API = process.env.IQ_API
const KEY = process.env.OW_KEY 
const AI_KEY= process.env.AI_KEY

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(cors());
app.use(express.json());

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//for default weather
app.post("/location", async (req, res) => {
 try{const { latitude, longitude } = req.body;
  let weatherDATA = await getWeather(longitude, latitude);
  const advice = await AIdata(weatherDATA)
// res.json(weatherDATA)}
  res.json({
      weather: weatherDATA,
      advice: advice
    });}
    catch (err){
      console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Something went wrong" }); 
    }
});

//for weather through city

app.post('/CityWeather', async (req, res) => {
  try {
    const { city } = req.body;
    console.log("City received:", city); // ✅ log for debug

    if (!city) return res.status(400).json({ error: "City is required" });

    let weatherDATA = await searchResult(city);
    console.log("Weather data:", weatherDATA); // ✅ debug log

    let advice = await AIdata(weatherDATA);
    console.log("Advice:", advice); // ✅ debug log

    res.json({
      weather: weatherDATA,
      advice: advice
    });
  } catch (err) {
    console.error("CityWeather route error:", err); // ✅ important
    res.status(500).json({ error: "Something went wrong" });
  }
});

