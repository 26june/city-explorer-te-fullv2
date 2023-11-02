import { useState } from "react";
import "./App.css";
import MyMap from "./components/MyMap";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [currentSearch, setCurrentSearch] = useState({
    display_name: "London, Greater London, England, United Kingdom",
    lat: "51.5073359",
    lon: "-0.12765",
  });

  return (
    <div className="App">
      <Search
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
      ></Search>
      <MyMap currentSearch={currentSearch}></MyMap>
      <WeatherInfo currentSearch={currentSearch}></WeatherInfo>
    </div>
  );
}

export default App;
