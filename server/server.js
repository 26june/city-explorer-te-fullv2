const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to my API!"));

app.get("/weather", async (req, res) => {
  let { lat = 51.5073359, lon = -0.12765 } = req.query;

  const axiosRes =
    await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_MASTER_KEY}
    `);

  res.send(axiosRes.data);
});

app.get("/location", async (req, res) => {
  let { locationSearch = "London" } = req.query;

  const API = `https://eu1.locationiq.com/v1/search?q=${locationSearch}&key=${process.env.LOC_API_KEY}&format=json`;

  const axiosRes = await axios.get(API);

  res.send(axiosRes.data[0]);
});

app.get("/movies", async (req, res) => {
  let { movieSearch = "London" } = req.query;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWExODFiNjQyNDdjMGEyNjMzYTVhYzYzMTQwMmNmNCIsInN1YiI6IjY1NDRkMzk2OWNjNjdiMDBjNDQyYWE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUGMA9p7neZ3PhKEviP5EugVcFpMRwQxDIzdK1mtfmI",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      res.send(response.data.results[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
  // res.send(axiosRes.data[0]);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
