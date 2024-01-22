import React, { useState, useEffect } from 'react'
import RemainderList from './RemainderList'
import CreateModel from './portals/CreateModel'
import { getAllData, deleteData } from '../database/db'


const AddRemainder = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [reminderList, setReminderList] = useState({})
    const [showAlert, setShowAlert] = useState(false);
    const [second, setSecond] = useState('')
    const [minutes, setMinutes] = useState('')
    const [taskName, setTaskName] = useState('')

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSubmission = () => {
        fetchData();
    };

    const fetchData = async () => {
        const data = await getAllData();
        setReminderList(data)
        checkAlert(data)
        console.log('All Data:', data);
    };

    const handleDelete = async (id) => {
        await deleteData(id);
        await fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    const checkAlert = (data) => {
        const now = new Date();
        const futureTime = new Date(now.getTime() + 2 * 60000); // 2 minutes later

        const showAlert = data.some((item) => {
            const itemTime = new Date(`${item.date}T${item.time}`);
            return now <= itemTime && itemTime <= futureTime;
        });

        if (showAlert) {
            const nearestReminder = data.find((item) => {
              const itemTime = new Date(`${item.date}T${item.time}`);
              return now <= itemTime && itemTime <= futureTime;
            });
        
            const timeDifference = Math.ceil((new Date(nearestReminder.date + 'T' + nearestReminder.time) - now) / 1000);
            const remainingMinutes = Math.floor(timeDifference / 60);
            const remainingSeconds = timeDifference % 60;

            setSecond(remainingSeconds)
            setMinutes(remainingMinutes)
            setTaskName(nearestReminder.name)
        }

        setShowAlert(showAlert);
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     if (showAlert) {
    //         alert(`For Task ${taskName} Remaning Time is ${minutes}:${second}`);
    //         setShowAlert(false);
    //     }
    // }, [showAlert]);

    return (
        <div className='container mt-4'>
            <h4 style={{ textAlign: "left",display: "flex", justifyContent: "space-between" }}>
                <span className="material-icons ms-2 remainder-icon" onClick={openModal}>
                    notification_add
                </span>
                { showAlert ?  <span class="alert alert-danger" style={{padding: "0.3rem 0.3rem !important", marginBottom: "5px"}} role="alert"> For Task {taskName} Remaning Time is {minutes}:{second} </span> : null }
            </h4>
            {modalVisible && (
                <CreateModel onClose={() => { closeModal(); handleSubmission(); }} />
            )}
            <RemainderList reminderList={reminderList} handleDelete={handleDelete} />
        </div>
    )
}

export default React.memo(AddRemainder)