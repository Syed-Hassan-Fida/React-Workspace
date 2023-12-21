import React from 'react';
import Hello from './ChildComponent';
import MethodAsProp from './MethodAsProp';

const ParentComponent = () => {
    const userDetails = {
        name: "ali",
        email: "test@gmail.com",
        address: "etc"
    }

    const HandleAlert = (child) => {
        alert(`Return params ${child}`)
    }

    return (
        <div>
            <Hello user={userDetails}>
                <p>This is Child Tag...</p>
            </Hello>
            <MethodAsProp handleAlert={HandleAlert}/>
        </div>
    );
}

export default ParentComponent;
