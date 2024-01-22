import React from 'react'

const RemainderList = ({ reminderList, handleDelete }) => {

  return (
    <div className='d-flex flex-wrap flex-column align-items-left p-2 justify-content-left remainder pt-4 pb-4'>
      <h1 className='m-3'>Upcomming Reminder's</h1>
      <div>
        {Object.keys(reminderList).length !== 0 ?
          reminderList.map((value, key) => {
            const currentTime = new Date();
            const taskTime = new Date(`${value.date}T${value.time}`);
            const isTaskOverdue = taskTime < currentTime;

            const priorityClass =
              value.priority === "low" ? 'priority-low' :
                value.priority === "medium" ? 'priority-medium' :
                  value.priority === "high" ? 'priority-high' : '';

            const borderStyle = isTaskOverdue ? { borderLeft: "4px solid red" } : {};

            return (
              <div
                className={`m-3 lists ${priorityClass}`}
                style={borderStyle}
                key={key}
              >
                <div>
                  <span>Task/Event: ABC</span>
                  <span>Desc: {value.name} </span>
                  <span>Date: {value.date} </span>
                  <span>Time: {value.time} </span>
                </div>
                <div>
                  <span className="material-icons" style={{ color: 'gray', marginRight: '5px' }} id={value.id}>
                    visibility
                  </span>
                  <span className="material-icons" style={{ color: 'green', marginRight: '5px' }} id={value.id}>
                    edit
                  </span>
                  <span className="material-icons" style={{ color: 'red' }} onClick={() => handleDelete(value.id)}>
                    delete
                  </span>
                </div>
              </div>
            );
          })
          :
          <div className="m-3 lists">
            <p>No Tasks Yet...</p>
          </div>
        }
      </div>

    </div>
  )
}

export default RemainderList