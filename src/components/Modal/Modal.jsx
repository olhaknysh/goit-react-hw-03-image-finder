import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeClose);
  }

  handleEscapeClose = e => {
    if (e.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleModalCLose = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { image } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleModalCLose} tabIndex="0">
        <div className="Modal">
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }),
  onCloseModal: PropTypes.func,
};

export default Modal;
