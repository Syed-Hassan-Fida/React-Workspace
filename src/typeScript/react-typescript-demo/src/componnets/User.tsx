import { useState } from 'react'
// import { AuthType } from './Types'

import { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {
    // without context api
    // type inference also check the type assertion concept (useState({} as AuthType})) => (user.name)
    // const [user, setUser] = useState<AuthType | null>(null)

    // with context api
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext.setUser((
            {
                name: "Ali",
                email: "ali@gmail.com"
            }
        ))
        // without context api
        // setUser({
        //     name: "Ali",
        //     email: "ali@gmail.com"
        // })
    }
    const handleeLogout = () => {
        userContext.setUser(null)
        // without context api
        // setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleeLogout}>Logout</button>
            {/* <h1>Welcome - {user?.name} </h1>
            <p>Email - {user?.email} </p> */}
            <h1>Welcome - {userContext?.user?.name} </h1>
            <p>Email - {userContext?.user?.email} </p>
        </div>
    )
}

export default User