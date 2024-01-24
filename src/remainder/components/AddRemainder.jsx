import React, { useState, useEffect, useCallback } from 'react';
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

    const handleSubmission = useCallback(() => {
        fetchData();
    }, [reminderList])

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
            <h4 className='remainder-icon'>
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