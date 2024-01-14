import React, { useState, useEffect } from 'react'
import { getAllData } from '../database/db'

const Lists = () => {
    const [reminderList, setReminderList] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllData();
            setReminderList(data)
            console.log('All Data:', data);
        };

        fetchData();
    }, []);

    return (
        <div>
            { Object.keys(reminderList).length != 0 ? 
                reminderList.map((value, key)=>{
                    return (
                        <div className={`${
                            value.priority === "low" ? 'priority-low m-3 lists' : ''
                        } ${
                            value.priority === "medium" ? 'priority-medium m-3 lists' : ''
                        }${
                            value.priority === "high" ? 'priority-high m-3 lists' : ''
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
                                <span className="material-icons" style={{ color: 'red' }} id={value.id}>
                                    delete
                                </span>
                            </div>
                        </div>
                    )
                })
                : <p>No Tasks Yet...</p>
            }
        </div>
    )
}

export default Lists