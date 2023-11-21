import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

    // get user info from sessionstoprage 
    const userJson = sessionStorage.getItem("user") 
    
    // console.log(userobject)
    // pars it to Obj
    const userObject = JSON.parse(userJson)
    // if user exist the update the auth to true

// checkimg auth
 const auth = userObject?._id

  return auth ? children : <Navigate to="/" />
}
