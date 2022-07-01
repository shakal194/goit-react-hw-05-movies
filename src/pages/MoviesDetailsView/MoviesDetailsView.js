import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
import * as movieApi from '../../API/API';
import s from './MovieDetailsView.module.css';
const Cast = lazy(() =>
  import('../Cast/Cast' /* webpackChunkName: "cast-view" */)
);
const Review = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "review-view" */)
);

export default function MovieDetailsView() {
  const { pathname } = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const navigate = useNavigate();

  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <>
        <button
          className={s.back_btn}
          onClick={() => {
            const prevRoute = window.sessionStorage.getItem('prevRoute');
            navigate(prevRoute ?? '/');
          }}
        >
          &#8592; Go back
        </button>
        <div className={s.movie_container}>
          <div className={s.photo_container}>
            <img
              className={s.poster}
              src={BASE_IMAGE_URL + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </div>
        <hr />
        <div>
          <p>Additional information:</p>
          <ul>
            <li>
              <NavLink
                className={s.movie__link}
                to={pathname.split('/').slice(0, 3).join('/') + '/cast'}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className={s.movie__link}
                to={pathname.split('/').slice(0, 3).join('/') + '/reviews'}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <hr />
        <Suspense fallback={<>loading...</>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
