import React from "react"
const UserContext = React.createContext()
// const userContext = React.createContext("ALi") // default value

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext