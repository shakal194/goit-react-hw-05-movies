import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Navigation } from '../Navigation/Navigation';
import { Header } from './App.styled';
import { Container } from 'CommonStyled/Common.styled';
import { HomePage } from '../pages/HomePage/HomePage';

import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage.js' /*webpackChunkName: 'MoviePage' */)
);

const NotFoundPage = lazy(() =>
  import(
    '../pages/NotFound/NotFoundPage.js' /*webpackChunkName: 'NotFoundPage' */
  )
);

export function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
