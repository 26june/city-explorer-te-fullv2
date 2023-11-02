const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to my API!"));

app.get("/weather", async (req, res) => {
  let { lat = 35.7796, lon = -78.6382 } = req.query;

  const axiosRes =
    await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_MASTER_KEY}
    `);

  res.send(axiosRes.data);
});

app.get("/location", async (req, res) => {
  //   let { lat = 35.7796, lon = -78.6382 } = req.query;
  let search = "London";

  const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${process.env.LOC_API_KEY}&format=json`;

  const axiosRes = await axios.get(API);

  res.send(axiosRes.data[0]);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
