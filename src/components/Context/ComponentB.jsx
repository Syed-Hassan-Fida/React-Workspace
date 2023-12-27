import React, { Component } from 'react'
import UserContext from './UserContext'
import ComponentC from './ComponentC'

export class ComponentB extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                ComponentB--{ this.context.name.toUpperCase() }
                <ComponentC/>
            </div>
        )
    }
}

export default ComponentB