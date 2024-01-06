import React from 'react'

const CountAge = (props) => {
    console.log("age comp")
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default React.memo(CountAge)