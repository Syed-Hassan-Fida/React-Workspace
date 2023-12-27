import React, {useState} from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
    return (
        <React.Fragment>
            {props.children(count, incrementCount)}
        </React.Fragment>
    )
}

export default Counter