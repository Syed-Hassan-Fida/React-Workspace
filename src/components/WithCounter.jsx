import React, { useState } from "react";

const UpdatedFunction = OriginalComponent => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <React.Fragment>
        <OriginalComponent
          count={count}
          incrementCount={incrementCount}
          {...props}
        />
      </React.Fragment>
    );
  };

  return NewComponent;
};

export default UpdatedFunction;
