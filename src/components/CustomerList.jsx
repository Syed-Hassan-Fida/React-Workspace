import React from 'react'

const CustomerList = (props) => {
    const {customer} = props
    return (
        <div>
            <p key={customer.id}>
                I am <strong>{customer.name}</strong> 
                my role is <strong>{customer.role}</strong>
                and my age is <strong>{customer.age}</strong>.
            </p>
        </div>
    )
}

export default CustomerList