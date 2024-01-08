import React, { useState } from 'react'
import RemainderList from './RemainderList'
import CreateModel from './portals/CreateModel'

const AddRemainder = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <div className='container mt-4'>
            <h4 style={{ textAlign: "left" }}>
                <span className="material-icons ms-2 remainder-icon" onClick={openModal}>
                    notification_add
                </span>
            </h4>
            {modalVisible && (
                <CreateModel onClose={closeModal}/>
            )}
            <RemainderList />
        </div>
    )
}

export default AddRemainder