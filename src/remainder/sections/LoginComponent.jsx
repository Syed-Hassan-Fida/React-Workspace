import React, { useState } from 'react'
import LoginForm from './LoginForm'

const LoginComponent = ({ onSubmit }) => {
    const [currentMode, setCurrentMode] = useState('login')
    const toggleMode = () => {
        var newMode = currentMode === 'login' ? 'signup' : 'login';
        setCurrentMode(newMode);
    }
    return (
        <div>
            <div className={`form-block-wrapper form-block-wrapper--is-${currentMode}`} ></div>
            <section className={`form-block form-block--is-${currentMode}`}>
                <header className="form-block__header">
                    <h1>{currentMode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                    <div className="form-block__toggle-block">
                        <span>{currentMode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here </span>
                        <input id="form-toggler" type="checkbox" onClick={toggleMode} style={{ marginLeft: "3px" }} />
                        <label htmlFor="form-toggler"></label>
                    </div>
                </header>
                <LoginForm mode={currentMode} onSubmit={onSubmit} />
            </section>
        </div>
    )
}

export default LoginComponent