import React, { useState } from 'react';
import Counter from './Counter';

const Hello = (props) => {
    const [subscribe, setSubscribe] = useState("subscribe")
    const [count, setCount] = useState(0)
    const { name, email, address } = props.user;

    function toCapital(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    const HandleChange = () => {
        setSubscribe("subscribed")
    }

    const HandleCount = () => {
        // set the value based on previous state
        setCount((prevState) => (prevState + 1))
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
        <div className='App'>
            <h1>Hello {name.toUpperCase()}</h1>
            <ul>
                <li>Email: {email}</li>
                <li>Address: {address}</li>
            </ul>
            <button className={subscribe === "subscribed" ? "subscribed" : "unsubscribe"} onClick={HandleChange}>{toCapital(subscribe)}</button>
            <br /><br />
            <button onClick={incrementFive}>Counter</button>
            <br /><br />
            <Counter count={count} />
            {props.children}
        </div>
    );
}

export default Hello;
