
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const apiKey = process.env.OPENWEATHER_API_KEY;
console.log("Using API Key:", process.env.OPENWEATHER_API_KEY);


app.get("/api/weather/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    console.log("Weather Data:", response.data); // Log the successful response
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error.response ? error.response.data : error.message); // Log the error response
    res.status(500).json({ error: "Weather API fetch failed" });
  }
});

app.get("/api/tripinfo/:city", (req, res) => {
  const requestedCity = req.params.city.toLowerCase();
  const cityKey = Object.keys(data).find(
    key => key.toLowerCase() === requestedCity
  );

  if (cityKey) {
    res.json(data[cityKey]);
  } else {
    res.status(404).json({ error: "Trip data not found for this city" });
  }
});





app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
