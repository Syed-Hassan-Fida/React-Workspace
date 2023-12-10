import React from 'react';
import Hello from './ChildComponent';

const ParentComponent = () => {
    const userDetails = {
        name: "ali",
        email: "test@gmail.com",
        address: "etc"
      }
    return (
        <div>
            <Hello user={userDetails}>
                <p>This is Child...</p>
            </Hello>
        </div>
    );
}

export default ParentComponent;
