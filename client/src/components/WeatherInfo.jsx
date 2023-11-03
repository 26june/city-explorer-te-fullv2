import React, { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import anime from "animejs";
import MovieInfo from "./MovieInfo";

export default function WeatherInfo({ currentSearch }) {
  const { lat, lon } = currentSearch;

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    async function getData() {
      const axiosRes = await axios.get(
        `http://localhost:8080/weather?lat=${lat}&lon=${lon}`
      );

      setCurrentData(axiosRes.data.data[0]);

      let animation = anime({
        targets: ".WeatherInfo .testText",
        translateX: [200, 0],
        easing: "easeOutCubic",
        duration: 2000,

        complete: function (anim) {
          animation.remove(".testText");
        },
      });
    }
    getData();
  }, [currentSearch]);

  return (
    <div className="WeatherInfo">
      {currentData && (
        <div className="testText">
          <p>{currentData.city_name}</p>
          <p>{currentData.temp} C</p>
          <p>{currentData.weather?.description}</p>
          <img
            src={`./icons/${currentData.weather?.icon}.png`}
            alt="Weather Icon"
          />

          <MovieInfo currentSearch={currentData.city_name}></MovieInfo>
        </div>
      )}
    </div>
  );
}
