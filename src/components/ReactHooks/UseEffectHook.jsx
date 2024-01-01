import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCounter] = useState(0)
    const [name, setName] = useState('')
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [display, setDisplay] = useState(true)
    const handleCount = () => {
        setCounter(prevState => prevState + 1)
    }
    const logMousePosition = (e) => {
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    // component willmount and did mount
    useEffect(() => {
        document.title = `You CLicked ${count} times`
        console.log("check", count)
    },[count])

    // component unmount
    useEffect( () => {
        console.log("check hook")
        window.addEventListener('mousemove', logMousePosition)

        // clean up functinon
        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            <h1>UseEffectHook</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value) }/>
            <button onClick={handleCount}>Counter {count} times</button>
            {
                display ? 
                <p>Mouse Position X:{x}--Y:{y} </p>
                : null
            }
            <button onClick={ () => setDisplay(false)}>Hide</button>
        </div>
    )
}

export default UseEffectHook