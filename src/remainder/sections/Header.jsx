import React from 'react'
import '../assets/css/remainder_custom.css'
import RemainderImage from '../assets/images/remainder_image.png'

const Header = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <span className='remainder-logo'>Remainder App</span>
                    <a className="navbar-brand header-a" href="/" >
                        <img src={RemainderImage} alt="" width="70" height="70" />
                    </a>
                </div>
            </nav>
        </React.Fragment >
    )
}

export default Header