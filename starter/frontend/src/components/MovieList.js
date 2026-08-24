import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const rawUrl = process.env.REACT_APP_MOVIE_API_URL || '';
    const baseUrl = rawUrl.replace(/\/$/, '');
    const targetUrl = `${baseUrl}/movies`;

    console.log('Fetching from:', targetUrl);

    axios
      .get(targetUrl)
      .then((response) => {
        console.log('Raw Response Data:', response.data);
        // Extract array from {'movies': [...]}
        const list = response.data?.movies || response.data || [];
        setMovies(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch Error:', err);
        setError(err.message || 'Failed to fetch');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  if (!movies || movies.length === 0) {
    return <p style={{ color: 'orange' }}>Connected to API, but movie list is empty.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="movieItem"
            onClick={() => onMovieClick(movie)}
            style={{
              margin: '10px 0',
              padding: '10px 20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
              backgroundColor: '#f9f9f9',
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
