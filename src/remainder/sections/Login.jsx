import React from 'react'
import '../assets/css/login.css'
import LoginComponent from './LoginComponent';

const Login = () => {
    const mode = 'login';
    const handleFormSubmit = (e) => {
        console.log(`zxxzx`, mode)
        e.preventDefault()
    }
    return (
        <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
            onSubmit={handleFormSubmit}
        />
    </div>
    )
}

export default Login

