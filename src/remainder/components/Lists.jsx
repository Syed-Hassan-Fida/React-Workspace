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
    console.log('reminderList', reminderList);

    return (
        <div>
            <div className='priority-high m-3 lists'>
                <div>Task/Event: ABC
                    <span>Desc: Test</span>
                    <span>Scheduled For: 2-12-2023</span>
                    <span>Priority: Hight</span>
                </div>
                <div>
                    <span className="material-icons" style={{ color: 'gray', marginRight: '5px' }}>
                        visibility
                    </span>
                    <span className="material-icons" style={{ color: 'green', marginRight: '5px' }}>
                        edit
                    </span>
                    <span className="material-icons" style={{ color: 'red' }}>
                        delete
                    </span>
                </div>
            </div>
            <div className='priority-medium m-3 lists'>
                <lists>Task/Event: ABC
                    <span>Desc: Test</span>
                    <span>Scheduled For: 2-12-2023</span>
                    <span>Priority: Medium</span>
                </lists>
                <div>
                    <span className="material-icons" style={{ color: 'gray', marginRight: '5px' }}>
                        visibility
                    </span>
                    <span className="material-icons" style={{ color: 'green', marginRight: '5px' }}>
                        edit
                    </span>
                    <span className="material-icons" style={{ color: 'red' }}>
                        delete
                    </span>
                </div>
            </div>
            <div className='priority-low m-3 lists'>
                <div>Task/Event: ABC
                    <span>Desc: Test</span>
                    <span>Scheduled For: 2-12-2023</span>
                    <span>Priority: Low</span>
                </div>
                <div>
                    <span className="material-icons" style={{ color: 'gray', marginRight: '5px' }}>
                        visibility
                    </span>
                    <span className="material-icons" style={{ color: 'green', marginRight: '5px' }}>
                        edit
                    </span>
                    <span className="material-icons" style={{ color: 'red' }}>
                        delete
                    </span>
                </div>
            </div>

            { reminderList ? 
                reminderList.map((value, key)=>{
                    return (
                        <div className='{value.priority == "low" priority-low ? null  } m-3 lists' key={key}>
                            <div>Task/Event: ABC
                                <span>Desc: {value.name} </span>
                                <span>Date: {value.date} </span>
                                <span>Time: {value.time} </span>
                            </div>
                        </div>
                    )
                })
                : null
            }
        </div>
    )
}

export default Lists