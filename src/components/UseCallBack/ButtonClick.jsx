import React from 'react'

const ButtonClick = ({handleClick, children}) => {
    console.log(children)
    return (
        
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(ButtonClick)