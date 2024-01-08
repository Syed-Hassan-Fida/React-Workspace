import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import '../../../components/assets/model.css'

const CreateModel = ({ onClose }) => {
    const [modalRoot] = useState(() => document.getElementById('modal-root'));
    const modalElement = document.createElement('div');

    React.useEffect(() => {
        modalRoot.appendChild(modalElement);

        return () => {
            modalRoot.removeChild(modalElement);
        };
    }, [modalElement, modalRoot]);

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span class="material-icons cancel-button" onClick={onClose}>
                    close
                </span>
                <div className='container'>
                    <h2>Create</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Event/Task Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">description</label>
                            <textarea className="form-control" id="description" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" id="date" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input type="time" className="form-control" id="time" />
                        </div>
                        <button type="submit" className="btn btn-primary submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>,
        modalElement
    );
}

export default CreateModel