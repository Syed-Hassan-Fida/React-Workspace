import React, { useState, useEffect, useMemo } from 'react';
import RemainderList from './RemainderList';
import CreateModel from './portals/CreateModel';
import { getAllData, deleteData } from '../database/db';

const AddRemainder = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [reminderList, setReminderList] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [remainingTime, setRemainingTime] = useState({ minutes: 0, seconds: 0 });
    const [taskName, setTaskName] = useState('');

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
        setReminderList(data);
        checkAlert(data);
    };

    const handleDelete = async (id) => {
        await deleteData(id);
        await fetchData();
    };

    const checkAlert = (data) => {
        const now = new Date();
        const futureTime = new Date(now.getTime() + 2 * 60000);

        const showAlert = data.some((item) => {
            const itemTime = new Date(`${item.date}T${item.time}`);
            return now <= itemTime && itemTime <= futureTime;
        });

        if (showAlert) {
            const nearestReminders = data.filter((item) => {
                const itemTime = new Date(`${item.date}T${item.time}`);
                return now <= itemTime && itemTime <= futureTime;
            });

            // Find the nearest reminder based on time difference
            const nearestReminder = nearestReminders.reduce((prev, current) => {
                const prevTimeDifference = Math.abs(now - new Date(`${prev.date}T${prev.time}`));
                const currentTimeDifference = Math.abs(now - new Date(`${current.date}T${current.time}`));
                return prevTimeDifference < currentTimeDifference ? prev : current;
            });

            const timeDifference = Math.ceil((new Date(nearestReminder.date + 'T' + nearestReminder.time) - now) / 1000);
            const remainingMinutes = Math.floor(timeDifference / 60);
            const remainingSeconds = timeDifference % 60;

            setRemainingTime({ minutes: remainingMinutes, seconds: remainingSeconds });
            setTaskName(nearestReminder.name);
        }

        setShowAlert(showAlert);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        let countdownInterval;

        if (showAlert && (remainingTime.minutes > 0 || remainingTime.seconds > 0)) {
            countdownInterval = setInterval(() => {
                setRemainingTime((prevTime) => {
                    if (prevTime.minutes === 0 && prevTime.seconds === 1) {
                        clearInterval(countdownInterval);
                        setShowAlert(false);
                        return { minutes: 0, seconds: 0 };
                    }

                    const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
                    const newMinutes = prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes;

                    return { minutes: newMinutes, seconds: newSeconds };
                });
            }, 1000);
        }

        return () => clearInterval(countdownInterval);
    }, [showAlert, remainingTime]);

    const alertMessage = useMemo(() => (
        showAlert && (
            <span className='alert alert-danger' style={{ padding: '0.3rem 0.3rem !important', marginBottom: '5px' }} role='alert'>
                {' '}
                For Task {taskName} Remaining Time is {String(remainingTime.minutes).padStart(2, '0')}:{String(remainingTime.seconds).padStart(2, '0')}{' '}
            </span>
        )
    ), [showAlert, taskName, remainingTime]);

    return (
        <div className='container mt-4'>
            <h4 style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                <span className='material-icons ms-2 remainder-icon' onClick={openModal}>
                    notification_add
                </span>
                {alertMessage}
            </h4>
            {modalVisible && <CreateModel onClose={() => { closeModal(); handleSubmission(); }} />}
            <RemainderList reminderList={reminderList} handleDelete={handleDelete} handleSubmission={handleSubmission} />
        </div>
    );
};

export default React.memo(AddRemainder);