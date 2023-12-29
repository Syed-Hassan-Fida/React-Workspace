// User.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInAction, logOutAction, updateUsernameAction } from '../../reduxSetup';

const User = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userName}!</h2>
          <button onClick={() => dispatch(logOutAction())}>Log Out</button>
        </div>
      ) : (
        <div>
          <h2>Please log in:</h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => dispatch(updateUsernameAction(e.target.value))}
          />
          <button onClick={() => dispatch(logInAction(userName))}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default User;
