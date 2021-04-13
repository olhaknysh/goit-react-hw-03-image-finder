import './ImageGallery.css';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onShowModal, onShowImage }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onShowModal={onShowModal}
        onShowImage={onShowImage}
      />
    ))}
  </ul>
);

export default ImageGallery;
