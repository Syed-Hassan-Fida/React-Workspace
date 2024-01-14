import React, { useState, useEffect } from 'react'
import RemainderList from './RemainderList'
import CreateModel from './portals/CreateModel'
import { getAllData, deleteData } from '../database/db'


const AddRemainder = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [reminderList, setReminderList] = useState({})


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllData();
            setReminderList(data)
            console.log('All Data:', data);
        };
        fetchData();
    }, [reminderList]);

    return (
        <div className='container mt-4'>
            <h4 style={{ textAlign: "left" }}>
                <span className="material-icons ms-2 remainder-icon" onClick={openModal}>
                    notification_add
                </span>
            </h4>
            {modalVisible && (
                <CreateModel onClose={closeModal} />
            )}
            <RemainderList reminderList={reminderList} deleteData={deleteData} />
        </div>
    )
}

export default AddRemainder