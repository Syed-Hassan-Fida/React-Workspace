import { useState } from 'react'
import { AuthType } from './Types'

const User = () => {
    // type inference also check the type assertion concept (useState({} as AuthType})) => (user.name)
    const [user, setUser] = useState<AuthType | null>(null)
    const handleLogin = () => {
        setUser({
            name: "Ali",
            email: "ali@gmail.com"
        })
    }
    const handleeLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleeLogout}>Logout</button>
            <h1>Welcome - {user?.name} </h1>
            <p>Email - {user?.email} </p>
        </div>
    )
}

export default User