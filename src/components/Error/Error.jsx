import PropTypes from 'prop-types';
import './Error.css';

const Error = ({ error }) => <p className="Error">{error}</p>;

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
