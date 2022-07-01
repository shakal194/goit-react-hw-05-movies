import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesLinkList.module.css';

export default function MoviesLinkList(data) {
  return (
    data && (
      <ul>
        {data.data.map(({ id, original_title }) => {
          return (
            <li className={s.movies__item} key={id}>
              <NavLink className={s.movies__link} to={`/movies/${id}`}>
                {original_title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    )
  );
}

MoviesLinkList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
