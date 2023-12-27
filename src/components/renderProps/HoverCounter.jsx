import React from 'react'

const HoverCounter = (props) => {
    const { count, incrementCount } = props
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Clicked {count} times</h1>
        </div>
    )
}

export default HoverCounter