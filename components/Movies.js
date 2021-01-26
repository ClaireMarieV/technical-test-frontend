import React, { useState, useEffect } from "react";
import Link from "next/link";

const Movies = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:3001/movies")
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <div className="movies">
        {movies.map((movie) => (
          <div className="movie">
            <Link href={"/movie/" + movie.id}>
              <a>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                />
                <div className="content">
                  <h2>{movie.original_title}</h2>
                </div>
              </a>
            </Link>
          </div>
        ))}
        <style jsx>{`
          .movies {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            margin: auto;
            grid-gap: 3rem;
          }
          .movie a {
            display: flex;
            flex-direction: column;
          }

          a > .content {
            background-color: black;
            padding: 2rem;
            color: white;
          }
          img {
            z-index: -1;
            object-fit: cover;
            width: -webkit-fill-available;
          }
        `}</style>
      </div>
    </div>
  );
};
export default Movies;
