import React from 'react'

const CounterSalary = (props) => {
    console.log("Salary Comp")
    return (
        <div>
            <p>Salary: {props.salary}</p>
        </div>
    )
}

export default React.memo(CounterSalary)