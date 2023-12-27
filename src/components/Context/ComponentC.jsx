import React, { useContext } from 'react'
import UserContext, { UserConsumer } from './UserContext'

const ComponentC = () => {
    const {name, addDetails} = useContext(UserContext)
  return (
    <div>
        ComponentC {name.toUpperCase()}<br/>
        <button onClick={() => addDetails('Test')}>Click to Add Address</button>
            {/* <UserConsumer>
                {
                    (userName) => {
                        return <div>Name: {userName.toUpperCase()}</div>
                    }
                }
            </UserConsumer> */}
    </div>
  )
}

export default ComponentC