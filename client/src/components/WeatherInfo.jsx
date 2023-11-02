import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function WeatherInfo({ currentSearch }) {
  const { lat, lon } = currentSearch;

  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    async function getData() {
      const axiosRes = await axios.get(
        `http://localhost:8080/weather?lat=${lat}&lon=${lon}`
      );

      setCurrentData(axiosRes.data.data[0]);
      console.log(axiosRes.data.data[0]);
    }

    getData();
  }, [currentSearch]);

  return (
    <div className="WeatherInfo">
      WeatherInfo
      <div className="testText">
        <p>{currentData.city_name}</p>
        <p>{currentData.temp}</p>
        <p>{currentData.weather?.description}</p>
      </div>
    </div>
  );
}
