import { useState, useEffect } from 'react';
import { fetchMovieById } from 'Services/MovieApi';
import { useParams } from 'react-router-dom';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};