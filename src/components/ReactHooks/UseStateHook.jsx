import React, { useState } from 'react'

const UseStateHook = props => {
  const initialValue = 0
  const [count, setCount] = useState(initialValue) // increment counter
  const [name, setName] = useState({ firstName: "", lastName: "" }) // object handling
  const [number, setNumber] = useState([])
  const increaseByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevState => prevState + 1)
    }
  }
  const AddNumber = () => {
    setNumber([...number, {
      id: number.length,
      value: Math.floor(Math.random() * 10) + 1
    }])

    console.log(number,"number")
  }
  return (
    <div>
      <h2>UseStateHook</h2>
      <h3>Increment</h3>
      <p>Count : {count}</p>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={increaseByFive}>Increase By 5</button>
      <h3>Increment</h3>
      <input type='text' value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })} />
      <input type='text' value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })} />
      <p>First Name: {name.firstName}</p>
      <p>Last Name: {name.lastName}</p>
      {JSON.stringify(name)}
      <br /><br />
      <button onClick={AddNumber}>Add Number</button>
      <ul>
        {
          number.map( item => <li key={item.id}>{item.value}</li>)
        }
      </ul>

    </div>
  )
}


export default UseStateHook