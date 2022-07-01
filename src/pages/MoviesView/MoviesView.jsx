import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchSearchMovie } from '../../API/API';
import MoviesLinkList from '../../components/MoviesLinkList/MoviesLinkList';
import s from './MoviesView.module.css';

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  let searchQuery = null;

  const setSearchQueryToValue = () => {
    const prevRoute = window.sessionStorage.getItem('prevRoute');
    if (prevRoute.includes('search')) {
      searchQuery = prevRoute.slice(15);
    }
  };

  setSearchQueryToValue();

  useEffect(() => {
    const query = search.slice(8);
    if (!query) {
      return;
    }
    fetchSearchMovie(query).then(setMovies);
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim();
    if (!query) {
      return;
    }
    navigate(`${pathname}?search=${query}`);
    window.sessionStorage.setItem('prevRoute', `${pathname}?search=${query}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          defaultValue={searchQuery ?? ''}
          type="text"
        ></input>
        <input className={s.form__btn} type="submit" value="Search" />
      </form>
      {movies && <MoviesLinkList data={movies.results} />}
    </>
  );
}
