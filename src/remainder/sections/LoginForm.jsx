import React, { useState } from 'react'

const LoginForm = ({ mode, onSubmit }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "",
        description: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const Input = ({ id, type, label, disabled }) => (
        <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled} />
    );
    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <div className="form-block__input-wrapper">
                    <div className={`form-group form-group--login${mode === 'login' ? ' visible' : ''}`}>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            label="user name"
                            disabled={mode === 'signup'}
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            label="password"
                            disabled={mode === 'signup'}
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={`form-group form-group--signup${mode === 'signup' ? ' visible' : ''}`}>
                        <Input type="text" id="fullname" label="full name" disabled={mode === 'login'} value={mode === 'login' ? '' : undefined} />
                        <Input type="email" id="email" label="email" disabled={mode === 'login'} value={mode === 'login' ? '' : undefined} />
                        <Input type="password" id="createpassword" label="password" disabled={mode === 'login'} value={mode === 'login' ? '' : undefined} />
                        <Input type="password" id="repeatpassword" label="repeat password" disabled={mode === 'login'} value={mode === 'login' ? '' : undefined} />
                    </div>
                </div>
                <button className="button button--primary full-width" type="submit">{mode === 'login' ? 'Log In' : 'Sign Up'}</button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm