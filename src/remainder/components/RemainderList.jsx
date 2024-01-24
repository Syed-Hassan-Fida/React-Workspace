import React, { useEffect, useReducer, useState } from 'react';
import ViewModal from './portals/ViewModal';
import EditModal from './portals/EditModal';

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
  const [rerenderFlag, setRerenderFlag] = useState(false);

  const openModal = (type, id) => {
    dispatch({ type: `OPEN_${type}_MODAL`, id });
  };

  const closeModal = (type) => {
    dispatch({ type: `CLOSE_${type}_MODAL` });
    setRerenderFlag((prevFlag) => !prevFlag);
  };

  useEffect(() => {
    handleSubmission();
  }, [rerenderFlag]);

  const { viewModalVisible, editModalVisible, selectedId } = state;

  return (
    <div className='d-flex flex-wrap flex-column align-items-left p-2 justify-content-left remainder pt-4 pb-4'>
      <h1 className='m-3'>Upcoming Reminders</h1>
      <div>
        {reminderList.length !== 0 ? (
          reminderList.map((value, key) => {
            const currentTime = new Date();
            const taskTime = new Date(`${value.date}T${value.time}`);
            const isTaskOverdue = taskTime < currentTime;

            const priorityClass =
              value.priority === 'low' ? 'priority-low' :
                value.priority === 'medium' ? 'priority-medium' :
                  value.priority === 'high' ? 'priority-high' : '';

            const borderStyle = isTaskOverdue ? { borderLeft: '4px solid red' } : {};
            const taskExpired = isTaskOverdue ? 'Task Expired' : {};

            const showCountdownAlert = !isTaskOverdue && taskTime - currentTime <= 2 * 60 * 1000;

            const countdownSeconds = Math.ceil((taskTime - currentTime) / 1000);
            const countdownMinutes = Math.floor(countdownSeconds / 60);
            const countdownRemainingSeconds = countdownSeconds % 60;

            return (
              <React.Fragment key={key}>
                <div
                  className={`m-3 lists ${priorityClass}`}
                  style={borderStyle}
                  title={taskExpired}
                >
                  <div>
                    <span>Task: {value.name}</span>
                  </div>
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
                </div>
                {showCountdownAlert && (
                  <p className='alert alert-danger' role='alert'>
                    Countdown: {countdownMinutes} minutes {countdownRemainingSeconds} seconds
                  </p>
                )}
              </React.Fragment>
            );
          })
        ) : (
          <div className='m-3 lists'>
            <p>No Tasks Yet...</p>
          </div>
        )}
      </div>
      {viewModalVisible && <ViewModal onClose={() => closeModal('VIEW')} id={selectedId} />}
      {editModalVisible && <EditModal onClose={() => { closeModal('EDIT'); }} id={selectedId} />}
    </div>
  );
};

export default RemainderList;
