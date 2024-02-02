import React from 'react'
import Header from './sections/Header'
import AddRemainder from './components/AddRemainder'
import Login from './sections/Login'
import ParentOne from '../optimization/ParentOne'
import ChildOne from '../optimization/ChildOne'

const Dashboard = () => {
    return (
        <React.Fragment>
            <Header />
            {/* <Login/> */}
            <AddRemainder />

            {/* call child component as children */}
            {/* <ParentOne>
                <ChildOne/>
            </ParentOne> */}
        </React.Fragment>
    )
}

export default Dashboard