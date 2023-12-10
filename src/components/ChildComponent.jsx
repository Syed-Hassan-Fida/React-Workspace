import React, { useState } from 'react';
import Counter from './Counter';

const Hello = (props) => {
    const [subscribe, setSubscribe] = useState("Subscribe")
    const [count, setCount] = useState(0)
    const {name, email, address} = props.user;

    const HandleChange = () => {
        setSubscribe("Subscribed")
    }

    const HandleCount = () => {
        // set the value based on previous state
        setCount((prevState) => (prevState + 1) )
        console.log(count)
    }

    const incrementFive = () => {
        HandleCount()
        HandleCount()
        HandleCount()
        HandleCount()
        HandleCount()
    }

    return (
        <div>
            <h1>Hello {name.toUpperCase()}</h1>
            <ul>
                <li>Email: {email}</li>
                <li>Address: {address}</li>
            </ul>
            <button onClick={HandleChange}>{subscribe}</button>
            <br/><br/>
            <button onClick={incrementFive}>Counter</button>
            <br/><br/>
            <Counter count={count}/>
            

            {props.children}
        </div>
    );
}

export default Hello;
