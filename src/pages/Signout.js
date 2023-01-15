import React from 'react'
import { Navigate } from 'react-router-dom';

const Signout = ({setToken}) => {
    setToken('');
    return(
        <Navigate to="/"/>
    )
}

export default Signout