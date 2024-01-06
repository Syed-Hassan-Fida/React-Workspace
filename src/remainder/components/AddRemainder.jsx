import React from 'react'
import RemainderList from './RemainderList'

const AddRemainder = () => {
    return (
        <div className='container mt-4'>
            <h4>Add Remainder
                <span className="material-icons ms-2 remainder-icon">
                    notification_add
                </span>
            </h4>
            <RemainderList/>
        </div>
    )
}

export default AddRemainder