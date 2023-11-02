import { useState } from "react";
import "./App.css";
import MyMap from "./components/MyMap";
import Search from "./components/Search";

function App() {
  const [currentSearch, setCurrentSearch] = useState("London");

  return (
    <div className="App">
      <Search setCurrentSearch={setCurrentSearch}></Search>
      <MyMap></MyMap>
    </div>
  );
}

export default App;
