import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { addData, getAllData } from '../../database/db'
import '../../../components/assets/model.css';

const CreateModel = ({ onClose }) => {
    const modalRoot = document.getElementById('modal-root');

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        date: "",
        time: "",
        priority: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addData({ ...formData });
        setFormData({
            name: "",
            description: "",
            date: "",
            time: "",
            priority: ""
        });
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getAllData();
    //         console.log('All Data:', data);
    //     };

    //     fetchData();
    // }, []);

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="material-icons cancel-button" onClick={onClose}>
                    close
                </span>
                <div className='container'>
                    <h2>Create</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Event/Task Name</label>
                            <input type="text" className="form-control" id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">description</label>
                            <textarea className="form-control" id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input type="time" className="form-control" id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="mb-3">
                            <select className="form-select" aria-label="Default select example"
                                name='priority'
                                value={formData.priority}
                                onChange={handleOnChange}
                            >
                                <option default>Select Task Priority</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>,
        modalRoot
    );
};

export default React.memo(CreateModel);