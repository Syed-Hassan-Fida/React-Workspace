import React from 'react'
import ComponentA from './ComponentA'
import { UserProvider } from './UserContext'


const ContextMain = () => {
  return (
    <div>
      ContextMain
      <UserProvider>
        <ComponentA />
      </UserProvider>
    </div>
  )
}

export default ContextMain