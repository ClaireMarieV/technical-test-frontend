import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:3001/movies/" + id)
      .then((response) => response.json())
      .then((movie) => {
        setMovie(movie);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Layout>
      <div className="container">
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
        <div>{movie.overview}</div>
      </div>
      <style jsx>{`
        .container {
          max-width: 70vw;
          margin: auto;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          gap: 3rem;
        }
        img {
          object-fit: contain;
        }
      `}</style>
    </Layout>
  );
};

export default Movie;
