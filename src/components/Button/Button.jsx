import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onLoadMore }) => {
  const handleLoadMore = () => onLoadMore();

  return (
    <button className="Button" type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
