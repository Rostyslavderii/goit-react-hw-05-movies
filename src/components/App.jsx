import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/Home';
import { MoviePage } from 'pages/MoviePage';
import { MovieDetails } from 'pages/MovieDetails';

const MovieCast = lazy(() =>
  import('../pages/MoviesCast').then(module => ({
    ...module,
    default: module.MovieCast,
  }))
);

const MovieReview = lazy(() =>
  import('../pages/Reviews').then(module => ({
    ...module,
    default: module.MovieReview,
  }))
);

// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const MoviePage = lazy(() => import('../pages/MoviePage'));
// const HomePage = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReview />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
