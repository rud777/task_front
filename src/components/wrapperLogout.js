import React, {useEffect} from 'react';
import Login from "../pages/Login";
import {useNavigate} from "react-router-dom";

function WrapperLogout(props) {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=>{
        if(token){
            navigate('/home')
        }

    },[token])
    return (
       <>
           <Login/>
       </>
    );
}

export default WrapperLogout;
