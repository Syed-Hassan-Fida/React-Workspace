import React, { useReducer } from 'react'
const initialState = {
    firstCount: 0,
    secondCount: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value}
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value}
        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value}
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}


const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>Simple Reducer with object</h2>
            <div>
                <p>Count -- {count.firstCount}</p>
                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Derement</button>
            </div>
            <div>
            <p>Count 2 -- {count.secondCount}</p>
                <button onClick={() => dispatch({type: 'increment2', value: 2})}>Increment 2</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 2})}>Derement 2</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    )
}

export default CounterTwo