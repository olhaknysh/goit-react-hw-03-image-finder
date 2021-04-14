import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, onShowModal, onShowImage }) => {
  const handleModalOpen = () => {
    onShowModal();
    onShowImage(image);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={handleModalOpen}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }),
  onShowModal: PropTypes.func.isRequired,
  onShowImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
