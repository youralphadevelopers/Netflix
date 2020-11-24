import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results);
    })([fetchUrl]);
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          //  console.log(movie);
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLarge && "row_posterLarge"}`}
              src={
                isLarge
                  ? `${base_url}${movie.poster_path}`
                  : `${base_url}${movie.backdrop_path}`
              }
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
