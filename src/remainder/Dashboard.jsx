import React from 'react'
import Header from './sections/Header'
import AddRemainder from './components/AddRemainder'
import Login from './sections/Login'

const Dashboard = () => {
    return (
        <React.Fragment>
            <Header />
            {/* <Login/> */}
            <AddRemainder />
            
        </React.Fragment>
    )
}

export default Dashboard