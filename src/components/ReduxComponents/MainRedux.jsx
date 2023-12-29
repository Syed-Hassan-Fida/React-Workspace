import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../../reduxSetup';
import Counter from './Counter';
import User from './User';

const MainRedux = () => {
    return (
        <div>
            <Provider store={store}>
                <div>
                    <Counter />
                    <hr />
                    <User />
                </div>
            </Provider>
        </div>
    )
}

export default MainRedux