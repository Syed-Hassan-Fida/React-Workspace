import { useReducer } from 'react'

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetAction = {
    type: 'reset'
}
type CounterAction = UpdateAction | ResetAction


const initialState = {
    count: 0
}
const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }

}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Counter - {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Add</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Sub</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}
