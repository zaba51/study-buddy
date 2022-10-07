import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from 'components/organisms/Modal/Modal.styles';
import { Button } from 'components/atoms/Button/Button';

const modalContainer = document.getElementById('modal-container');

const Modal = () => {
  const modalNode = document.createElement('ModalWrapper');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
  
    return () => {
        modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
        Hello World
        <Button> Close Modal</Button>
    </ModalWrapper>,
    modalContainer)
};

export default Modal