import React, {useState, useEffect, useRef} from 'react'
import useDocumentTitle from '../customHooks/useDocumentTitle'

const UseRefHook = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(0)

    useDocumentTitle(timer)
    useEffect(() =>{
        intervalRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

  return (
    <div>
        <h1>UseRefHook</h1>
        <p>Timer - {timer} </p>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  )
}

export default UseRefHook