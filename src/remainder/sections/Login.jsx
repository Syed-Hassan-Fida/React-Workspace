import React from 'react'
import '../assets/css/login.css'
import LoginComponent from './LoginComponent';

const Login = () => {
    const mode = 'login';
    return (
        <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
            onSubmit={
                function() {
                    console.log('submit');
                }
            }
        />
    </div>
    )
}

export default Login

