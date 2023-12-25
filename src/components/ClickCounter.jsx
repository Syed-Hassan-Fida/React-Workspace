import React from 'react'
import UpdatedFunction from './WithCounter'

const ClickCounter = (props) => {
    const {name, count, incrementCount} = props
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={incrementCount}>Add {count}</button>
        </div>
    )
}

export default UpdatedFunction(ClickCounter)