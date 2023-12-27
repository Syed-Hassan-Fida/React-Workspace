import React from 'react'
import CustomerList from './CustomerList';

const MethodAsProp = (props) => {
    const names = ["Ali", "diana", "alina"];
    const customers = [
        {
            id: 1,
            name: "ali",
            role: "customer",
            age: 34
        },
        {
            id: 2,
            name: "diana",
            role: "customer",
            age: 30
        }
    ];

    // array map
    const namesList = names.map((name, key) => {
        return (
            <React.Fragment key={key}>
                <p >Hi... {name}</p>
            </React.Fragment>
        )
    })

    // list object map with a seperate component
    const customersList = customers.map((customer) => <CustomerList key={customer.id} customer={customer}/>)

    return (
        <div>

            {namesList}

            {customersList}

            {/* method as props and pass attr child to parent */}
            <button onClick={() => props.handleAlert('child to parent')}>Click</button>
        </div>
    )
}

export default MethodAsProp