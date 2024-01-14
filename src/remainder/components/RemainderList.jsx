import React from 'react'

const RemainderList = ({ reminderList, deleteData }) => {
  const currentTime = new Date();
  const futureTime = new Date(currentTime.getTime() + 3 * 60000);
  const currentdDateTime = currentTime.toLocaleString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  const formattedDateTime = futureTime.toLocaleString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const handleDelete = async (id) => {
    await deleteData(id);
  };

  return (
    <div className='d-flex flex-wrap flex-column align-items-left p-2 justify-content-left remainder pt-4 pb-4'>
      <h1 className='m-3'>Upcomming Reminder's</h1>
      <div>
        {Object.keys(reminderList).length !== 0 ?
          reminderList.map((value, key) => {
            return (
              <div className={`${value.priority === "low" ? 'priority-low m-3 lists' : ''
                } ${value.priority === "medium" ? 'priority-medium m-3 lists' : ''
                }${value.priority === "high" ? 'priority-high m-3 lists' : ''
                }`} key={key}>
                <div>Task/Event: ABC
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
            )
          })
          : <div className="m-3 lists">
            <p>No Tasks Yet...</p>
          </div>
        }
      </div>
    </div>
  )
}

export default RemainderList