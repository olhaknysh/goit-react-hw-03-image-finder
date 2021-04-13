import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ image, onCloseModal }) => {
  const handleModalCLose = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  const handleKeyDown = e => {
    console.log(e);
  };

  return createPortal(
    <div
      className="Overlay"
      // onClick={handleModalCLose}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <div className="Modal">
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
