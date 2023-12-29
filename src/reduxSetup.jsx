// reduxSetup.js
import { createStore } from 'redux';

// Define actions
const incrementAction = () => ({ type: 'INCREMENT' });
const decrementAction = () => ({ type: 'DECREMENT' });
const resetAction = () => ({ type: 'RESET' });
// Define actions
const logInAction = (username) => ({ type: 'LOG_IN', payload: username });
const logOutAction = () => ({ type: 'LOG_OUT' });
const updateUsernameAction = (username) => ({ type: 'UPDATE_USERNAME', payload: username });

// Define reducer
const initialState = {
  counter: 0,
  isLoggedIn: false,
  userName: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'RESET':
      return { ...state, counter: 0 };
    case 'LOG_IN':
      return { ...state, isLoggedIn: true, userName: action.payload };
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false, userName: '' };
    case 'UPDATE_USERNAME':
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export { store, incrementAction, decrementAction, resetAction, logInAction, logOutAction, updateUsernameAction };
