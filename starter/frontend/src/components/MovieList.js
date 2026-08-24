import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_MOVIE_API_URL || "";

    axios
      .get(`${baseUrl}/movies`)
      .then((response) => {
        // Backend returns: { "movies": [ { "id": "123", "title": "Top Gun..." }, ... ] }
        setMovies(response.data.movies || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="movieItem"
            onClick={() => onMovieClick(movie)}
            style={{
              margin: "10px 0",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <strong>{movie.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
