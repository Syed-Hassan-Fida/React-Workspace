import React, { useState, useEffect } from 'react';
import RemainderList from './RemainderList';
import CreateModel from './portals/CreateModel';
import { getAllData, deleteData } from '../database/db';

const AddRemainder = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [reminderList, setReminderList] = useState([]);

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
    };

    const handleDelete = async (id) => {
        await deleteData(id);
        await fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container mt-4'>
            <h4 style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                <span className='material-icons ms-2 remainder-icon' onClick={openModal}>
                    notification_add
                </span>
            </h4>
            {modalVisible && <CreateModel onClose={() => { closeModal(); handleSubmission(); }} />}
            <RemainderList reminderList={reminderList} handleDelete={handleDelete} handleSubmission={handleSubmission} />
        </div>
    );
};

export default React.memo(AddRemainder);