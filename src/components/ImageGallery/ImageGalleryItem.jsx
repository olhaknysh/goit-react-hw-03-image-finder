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

export default ImageGalleryItem;
