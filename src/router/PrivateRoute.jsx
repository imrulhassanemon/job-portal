import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children}) => {

    const navigate = useNavigate()
    const loaction = useLocation()
    // console.log(loaction);

    const {user, loading} = useContext(AuthContext)
    console.log(user);

    if(loading){
       return <span className="loading loading-spinner loading-lg"></span>
    }
    
    // {
    //     user? children:<Navigate to={'signIn'}></Navigate>
    // }

    if(user){
        return children
    }
    return <Navigate to={'/signIn'} state={loaction.pathname}></Navigate>

};

export default PrivateRoute; 