import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { viewData } from '../../database/db'


const ViewModal = ({ onClose, id }) => {
    const modalRoot = document.getElementById('modal-view')
    const [taskData, setTaskData] = useState('')

    const timeObject = new Date(`${taskData.date}T${taskData.time}`)
    const hours = timeObject.getHours();
    const period = hours >= 12 ? 'PM' : 'AM'

    const fetchData = async () => {
        const data = await viewData(id);
        setTaskData(data)
    };

    useEffect(() => {
        fetchData()
    }, [])

    const priorityClass =
        taskData.priority === "low" ? 'priority-low' :
            taskData.priority === "medium" ? 'priority-medium' :
                taskData.priority === "high" ? 'priority-high' : ''

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="material-icons cancel-button" onClick={onClose}>
                    close
                </span>
                <div className='container'>
                    <h2>View Task</h2>
                    <div className="card text-center">
                        <div className={`card-header ${priorityClass}`} >
                            <strong>Priority: {taskData.priority}</strong>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{taskData.name}</h5>
                            <p className="card-text">{taskData.description}</p>
                        </div>
                        <div className="card-footer text-muted">
                            Date: <strong>{taskData.date}</strong> Time: <strong>{taskData.time} {period}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>, modalRoot
    )
}

export default ViewModal