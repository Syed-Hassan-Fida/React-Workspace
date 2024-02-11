import React, { useEffect, useReducer, useState } from 'react';
import ViewModal from './portals/ViewModal';
import EditModal from './portals/EditModal';
import { priorityClass, formatCountdown, taskOverdue } from '../helperFunctions';

const initialState = {
  viewModalVisible: false,
  editModalVisible: false,
  selectedId: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_VIEW_MODAL':
      return { ...state, viewModalVisible: true, selectedId: action.id };
    case 'CLOSE_VIEW_MODAL':
      return { ...state, viewModalVisible: false };
    case 'OPEN_EDIT_MODAL':
      return { ...state, editModalVisible: true, selectedId: action.id };
    case 'CLOSE_EDIT_MODAL':
      return { ...state, editModalVisible: false };
    default:
      return state;
  }
};

const RemainderList = ({ reminderList, handleDelete, handleSubmission }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [countdowns, setCountdowns] = useState({});

  const openModal = (type, id) => {
    dispatch({ type: `OPEN_${type}_MODAL`, id });
  };

  const closeModal = (type) => {
    dispatch({ type: `CLOSE_${type}_MODAL` });
  };

  useEffect(() => {
    handleSubmission();
  }, []);

  useEffect(() => {
    const intervalIds = {};

    reminderList.forEach((value) => {
      const taskTime = new Date(`${value.date}T${value.time}`);
      const isTaskOverdue = taskOverdue(value);

      if (!isTaskOverdue) {
        const intervalId = setInterval(() => {
          const remainingTime = taskTime - new Date();
          if (remainingTime <= 0) {
            clearInterval(intervalId);
          }
          setCountdowns((prevCountdowns) => ({
            ...prevCountdowns,
            [value.id]: remainingTime,
          }));
        }, 1000);

        intervalIds[value.id] = intervalId;
      }
    });

    return () => {
      Object.values(intervalIds).forEach((intervalId) => clearInterval(intervalId));
    };
  }, [reminderList]);

  const { viewModalVisible, editModalVisible, selectedId } = state;

  return (
    <div className='p-2 remainder pt-4 pb-4'>
      <h1 className='m-3'>Reminder List</h1>
      <div class="row">
        {reminderList.length !== 0 ? (
          reminderList.map((value) => {
            const isTaskOverdue = taskOverdue(value);

            const priority_Class = priorityClass(value)

            const borderStyle = isTaskOverdue ? { borderLeft: '4px solid red', width: 'auto' } : {};
            const taskExpired = isTaskOverdue ? 'Task Expired' : '';

            const countdownThreshold = {
              low: 2 * 60 * 1000,
              medium: 3 * 60 * 1000,
              high: 4 * 60 * 1000,
            }[value.priority] || 2 * 60 * 1000;

            const showCountdownAlert = !isTaskOverdue && countdowns[value.id] <= countdownThreshold;

            return (
              <div key={value.id} className={`m-3 col-12 col-md-3 ${priority_Class}`} style={borderStyle} title={taskExpired}>
                {/* <div className={`m-3 lists ${priority_Class}`} style={borderStyle} title={taskExpired}>
                  <div>
                    <span>{value.name.toUpperCase()}</span>
                  </div>
                  <div className='ellipsis-text'>
                    <span>Description: {value.description}</span>
                  </div>
                  {showCountdownAlert && (
                    <span style={{ width: "fit-content" }} role='alert'>
                      Countdown: {formatCountdown(countdowns[value.id])}
                    </span>
                  )}
                  <div>
                    <span className='material-icons' style={{ color: 'gray', marginRight: '5px' }} onClick={() => openModal('VIEW', value.id)}>
                      visibility
                    </span>
                    <span className='material-icons' style={{ color: 'green', marginRight: '5px' }} onClick={() => openModal('EDIT', value.id)}>
                      edit
                    </span>
                    <span className='material-icons' style={{ color: 'red' }} onClick={() => handleDelete(value.id)}>
                      delete
                    </span>
                  </div>
                </div> */}
                  <div className={`card ${priority_Class}`} style={{ width: "18rem" }}>
                    <div className="card-body">
                      <div>
                        <h5 className="card-title">{value.name.toUpperCase()}</h5>
                        <span className='material-icons' style={{ color: 'gray', marginRight: '5px' }} onClick={() => openModal('VIEW', value.id)}>
                          visibility
                        </span>
                        <span className='material-icons' style={{ color: 'green', marginRight: '5px' }} onClick={() => openModal('EDIT', value.id)}>
                          edit
                        </span>
                        <span className='material-icons' style={{ color: 'red' }} onClick={() => handleDelete(value.id)}>
                          delete
                        </span>
                      </div>
                      <p className="card-text">Description: {value.description}</p>
                      {showCountdownAlert && (
                        <span className="btn btn-primary" style={{ width: "fit-content" }} role='alert'>
                          Countdown: {formatCountdown(countdowns[value.id])}
                        </span>
                      )}
                    </div>
                  </div>
              </div>

            );
          })
        ) : (
          <div className='m-3 lists'>
            <p>No Tasks Yet...</p>
          </div>
        )}


      </div>

      {viewModalVisible && <ViewModal onClose={() => { closeModal('VIEW'); }} id={selectedId} handleSubmission={handleSubmission} />}
      {editModalVisible && <EditModal onClose={() => { closeModal('EDIT'); }} id={selectedId} handleSubmission={handleSubmission} />}
    </div>
  );
};

export default RemainderList;