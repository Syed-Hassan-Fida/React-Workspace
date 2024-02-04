import { createContext, useState } from "react";

export type AuthType = {
    name: string,
    email: string
}

export type UserContextProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthType | null,
    setUser: React.Dispatch<React.SetStateAction<AuthType | null>>
}

// type assertion
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [user, setUser] = useState<AuthType | null>(null)
    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}