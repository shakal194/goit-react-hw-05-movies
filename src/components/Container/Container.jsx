import s from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className={s.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Container;
