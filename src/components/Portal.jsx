import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import '../components/assets/model.css'

const Portal = ({children, onClose, name}) => {
    const [modalRoot] = useState(() => document.getElementById('modal-root'));
    const modalElement = document.createElement('div');

    if(name === "joker"){
        throw new Error("Joker Faild")
    }

    React.useEffect(() => {
        modalRoot.appendChild(modalElement);

        return () => {
            modalRoot.removeChild(modalElement);
        };
    }, [modalElement, modalRoot]);

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>,
        modalElement
    );
}

export default Portal