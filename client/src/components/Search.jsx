import React, { useState } from "react";

export default function Search({ setCurrentSearch }) {
  const [currentInput, setCurrentInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentSearch(event.target[0].value);
  }

  function getLocationData() {
    
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
    </div>
  );
}
