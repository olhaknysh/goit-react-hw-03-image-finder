import { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';
import Loader from './components/Loader';
import Error from './components/Error';

import getImages from './services/galleryApi';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loadMorePage, setLoadMorePage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [images]);

  const setImagesByQuery = search => {
    const page = 1;
    setIsLoading(true);

    getImages(search, page)
      .then(results => setImages(results))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));

    setQuery(search);
    setLoadMorePage(2);
    setError('');
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleModalImage = image => {
    setModalImage(image);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    getImages(query, loadMorePage)
      .then(results => setImages(prevState => [...prevState, ...results]))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
    setLoadMorePage(prevState => prevState + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={setImagesByQuery} />
      <ImageGallery
        images={images}
        onShowModal={handleModal}
        onShowImage={handleModalImage}
      />

      {error && <Error error={error} />}

      {images.length > 0 && !isLoading && (
        <Button onLoadMore={handleLoadMore} />
      )}
      {isLoading && <Loader />}

      {modal && <Modal image={modalImage} onCloseModal={handleModal} />}
    </div>
  );
};

export default App;
