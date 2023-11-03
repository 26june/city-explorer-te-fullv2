import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MovieInfo({ currentSearch }) {
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    async function getData() {
      const axiosRes = await axios.get(
        `http://localhost:8080/movies?movieSearch=${currentSearch}}}`
      );
      setCurrentMovie(axiosRes.data);
    }
    getData();
  }, [currentSearch]);

  return (
    <div className="MovieInfo">
      {currentMovie && (
        <>
          <h2>Movies Related to the City</h2>
          <h3>{currentMovie.title}</h3>
          <p>{currentMovie.overview}</p>
          <img
            id="moviePoster"
            src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`}
            alt={currentMovie.title}
          />
        </>
      )}
    </div>
  );
}
