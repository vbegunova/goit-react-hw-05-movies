import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Movies from 'pages/Movies/Movies';
// import NotFound from 'pages/NotFound/NotFound';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Movies = lazy(() => import('../pages/Movies'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Cast = lazy(() => import('./Cast'))
const Reviews = lazy(() => import('./Reviews'))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
