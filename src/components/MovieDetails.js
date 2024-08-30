import React, { useState, useEffect } from 'react';

const MovieDetails = ({ imdbID }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=3cc62e68`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setMovieDetails(responseJson);
    };

    getMovieDetails();
  }, [imdbID]);

  return (
    <div className='movie-details'>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.Title}</h2>
          <p><strong>Genre:</strong> {movieDetails.Genre}</p>
          <p><strong>Plot:</strong> {movieDetails.Plot}</p>
          <p><strong>Rating:</strong> {movieDetails.imdbRating}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
