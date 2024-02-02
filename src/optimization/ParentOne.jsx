import React, { useState } from 'react'

const ParentOne = ({children}) => {
    const [count, setCount] = useState(0)
    console.log("ParentOne")
    return (
    <div>
        <button onClick={() => {setCount((prev)=>prev+1)}}>count - {count}</button>
        {children}
    </div>
  )
}

export default ParentOne