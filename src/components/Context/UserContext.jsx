import React, {createContext, useState} from "react"
const UserContext = createContext()
// const userContext = React.createContext("ALi") // default value

// const UserProvider = UserContext.Provider
// const UserConsumer = UserContext.Consumer

export const UserProvider = ({children}) => {
    let [name, setName] = useState("Hassan")
    const addDetails = (address) => {
        const updatedName = name + ` ${address}`;
        setName(updatedName);
        console.log(updatedName, "data");
    }
    return (
        <UserContext.Provider value={{name, addDetails}}>
            {children}
        </UserContext.Provider>
    )
}

// export {UserProvider,UserConsumer}
export default UserContext