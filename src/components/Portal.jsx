import React, {useState} from 'react'
import { createPortal } from 'react-dom';
import Modal from './Modal';

const Portal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <button onClick={() => setShowModal(true)}>
          Show modal using a portal
        </button>
        {showModal && createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body
        )}
      </>
    );
}

export default Portal