import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ModalWrapper, ModalBackground } from 'components/organisms/Modal/Modal.styles';
import { Button } from 'components/atoms/Button/Button';


const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>
  );
};


const modalContainer = document.getElementById('modal-container');

export const MyModal = ({ handleClose, hasBlur, children }) => {
  const modalNode = document.createElement('ModalWrapper');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
  
    return () => {
        modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalBackground hasBlur>
      <ModalWrapper>
          {children}
          <Button onClick={handleClose}>Close</Button>
      </ModalWrapper>
    </ModalBackground>,
    modalContainer)
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};
export default Modal