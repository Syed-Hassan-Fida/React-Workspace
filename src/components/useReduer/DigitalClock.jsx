import React, { useReducer, useEffect } from 'react';

// Action types
const TICK = 'TICK';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case TICK:
            return new Date();
        default:
            return state;
    }
};

// Helper function to get the time of the day
const getTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
        return 'morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        return 'afternoon';
    } else if (currentHour >= 17 && currentHour < 20) {
        return 'evening';
    } else {
        return 'night';
    }
};

const DigitalClock = () => {
    const [state, dispatch] = useReducer(reducer, new Date());
    const user = "Test";

    useEffect(() => {
        const timerId = setInterval(() => {
            dispatch({ type: TICK });
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const formattedTime = state.toLocaleTimeString();
    const timeOfDay = getTimeOfDay();

    return (
        <div>
            <h1>{`Hello ${user}, it's ${formattedTime} now!!!`}</h1>
            <p>{`Good ${timeOfDay}!`}</p>
        </div>
    );
}

export default DigitalClock