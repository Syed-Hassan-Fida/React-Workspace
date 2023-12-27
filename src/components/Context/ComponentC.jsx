import React from 'react'
import { UserConsumer } from './UserContext'

const ComponentC = () => {
  return (
    <div>
        ComponentC
            <UserConsumer>
                {
                    (userName) => {
                        return <div>Name: {userName.toUpperCase()}</div>
                    }
                }
            </UserConsumer>
    </div>
  )
}

export default ComponentC