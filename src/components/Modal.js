import React from 'react';

import ModalStyle from '../styles/components/modal.scss';

const Modal = ({children, opened, doCloseModal}) => {
  return (
    <div>
      {opened &&
        <section className="modal">
          <div className="modal-close">
            <span onClick={doCloseModal}>
              <span className="sr-only">Close</span>
              <svg  viewBox="0 0 12 12">
                <path d="M6 4.586l4.24-4.24c.395-.395 1.026-.392 1.416-.002.393.393.39 1.024 0 1.415L7.413 6l4.24 4.24c.395.395.392 1.026.002 1.416-.393.393-1.024.39-1.415 0L6 7.413l-4.24 4.24c-.395.395-1.026.392-1.416.002-.393-.393-.39-1.024 0-1.415L4.587 6 .347 1.76C-.05 1.364-.048.733.342.343c.393-.393 1.024-.39 1.415 0L6 4.587z" fill-rule="evenodd"></path>
              </svg>
            </span>
          </div>
          <div className="modal-content">
            {children}
          </div>
        </section>
      }
    </div>
  );
}

export default Modal;