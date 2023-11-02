import React, { useState } from "react";
import axios from "axios";

export default function Search({ currentSearch, setCurrentSearch }) {
  const [currentInput, setCurrentInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    getLocationData(event.target[0].value);
    3;
  }

  async function getLocationData(locationToSearch) {
    const axiosRes = await axios.get(
      `http://localhost:8080/location?locationSearch=${locationToSearch}`
    );
    const { display_name, lat, lon } = axiosRes.data;
    setCurrentSearch((current) => {
      const output = {
        ...current,
        display_name: display_name,
        lat: lat,
        lon: lon,
      };

      return output;
    });
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
        />
        <input type="submit" />
      </form>

      <div className="testText">
        <p>{currentSearch.display_name}</p>
        <p>{currentSearch.lat}</p>
        <p>{currentSearch.lon}</p>
      </div>
    </div>
  );
}
