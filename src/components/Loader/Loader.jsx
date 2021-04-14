import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './Loader.css';

const LoaderImage = () => (
  <Loader
    className="Loader"
    type="ThreeDots"
    color="#3f51b5"
    height={40}
    width={40}
  />
);

export default LoaderImage;
