import React from 'react'
import ReactDOM from 'react-dom';
import './styles/Modal.css';

function Modal({isOpen, children, onClose}) {
  /* Create portal recibe dos argumentos, qué queremos renderizar y dónde lo queremos renderizar
  Los portales nos ayudan a renderizar un elemento fuera del nodo principal de la aplicación*/
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={onClose} className="Modal__close-button">❌</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
