import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
const HomeView = lazy(() =>
  import('../pages/HomeView/HomeView' /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import('../pages/MoviesView/MoviesView' /* webpackChunkName: "movies-view" */)
);
const MovieDetailsView = lazy(() =>
  import(
    '../pages/MoviesDetailsView/MoviesDetailsView' /* webpackChunkName: "movie-details-view" */
  )
);

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
