import React, { createContext } from 'react'
const context=createContext();
export const AuthContextProvider = ({children}) => {
  return (
    <div>
      <context.Provider>{children}</context.Provider>
    </div>
  )
}
