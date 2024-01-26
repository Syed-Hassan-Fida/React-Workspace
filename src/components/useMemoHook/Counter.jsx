import React, { useState, useMemo } from 'react'

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        // this will slow doen the execution but it will effect on counterTwo as well
        // so we use UseMemo Hook (recompute the cache value when one of the the dependencies has been changed)
        let i = 0
        while(i<200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    

  return (
    <div >
        <div>
            <button className="btn btn-primary m-3" onClick={incrementOne}>Count One -{counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button className='btn btn-primary m-3' onClick={incrementTwo}>Count Two -{counterTwo}</button>
        </div>
    </div>
  )
}

export default Counter