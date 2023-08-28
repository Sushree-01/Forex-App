import { createContext, useState } from "react";

export const AuthContext=createContext()
function AuthContextProvider({children}) {
const [state,setState]=useState({
    isAuth:false
})
const loginUser=()=>{
    setState({
        isAuth:true
     
    })
}
const logoutUser=()=>{
    setState({
        isAuth:false
    })
}
return(
    <AuthContext.Provider value={{authState:state,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
)
}

export default AuthContextProvider;