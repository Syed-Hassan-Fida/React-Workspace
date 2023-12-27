import React from 'react'
import ComponentA from './ComponentA'
import { UserProvider } from './UserContext'


const ContextMain = () => {
  return (
    <div>
      ContextMain
      <UserProvider value="hassan">
        <ComponentA />
      </UserProvider>
    </div>
  )
}

export default ContextMain