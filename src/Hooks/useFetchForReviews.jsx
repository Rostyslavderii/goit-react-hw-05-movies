import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieByIdForReviews } from 'Services/MovieApi';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieByIdForReviews(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};
