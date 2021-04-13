import { useState } from 'react';
// import axios from 'axios';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import getImages from './services/galleryApi';

const App = () => {
  const [search, setSearch] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const setImagesByQuery = query => {
    getImages(query).then(results => setSearch(results));
    console.log(search);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleModalImage = image => {
    setModalImage(image);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={setImagesByQuery} />
      <ImageGallery
        images={search}
        onShowModal={handleModal}
        onShowImage={handleModalImage}
      />
      {modal && <Modal image={modalImage} onCloseModal={handleModal} />}
    </div>
  );
};

export default App;
