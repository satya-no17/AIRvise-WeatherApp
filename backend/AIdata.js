const AIdata = async (weatherDATA) => {
//   const APIkey = process.env.AI_KEY; 
//   const prompt = `you have to give a "health impact summary" in maximun16words,"safety tips"in maximum 16 words,"personalised advice"in maximum13words to the user in a lovely and polite manner with the given${weatherDATA.location.city}, ${weatherDATA.location.state}, ${weatherDATA.location.country}
// Temperature: ${weatherDATA.weather.temperature}, Humidity: ${weatherDATA.weather.humidity}, Wind: ${weatherDATA.weather.windSpeed} from ${weatherDATA.weather.windDirection}
// AQI (US): ${weatherDATA.pollution.AQI_US}, Main Pollutant: ${weatherDATA.pollution.mainPollutant_US}

// Use a polite and lovely tone. Just 3 lines one by one for each one, no titles, no extra words other than the 3 lines of advice`;
//   try {
//     const response = await fetch(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${APIkey}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
//           messages: [{ role: "user", content: prompt }],
//         }),
//       }
//     );
//     const data = await response.json();
//     if (!data.choices || !data.choices[0] || !data.choices[0].message) {
//       console.error("❌ AI API returned unexpected response:", data);
//       return ["AI Error: Unexpected response from API"];
//     }
//     const text = data.choices[0].message.content;
//     const adviceArray = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    return ["abhi AUKAT ke bahar h :(\nThode time me aa jyega","SLEEP EARLY and Watch REELS","Tbtak bs jinda raho aur khush raho :)"];
//   } catch (err) {
//     console.error("❌ Error:", err.response?.data || err.message);
//     return ["AI Error: Unable to fetch advice"];
//   }
};
export default AIdata