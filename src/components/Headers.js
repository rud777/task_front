import React from 'react';
import {useDispatch} from "react-redux";
import {logOut} from "../store/actions/users";

function Headers(props) {
    const dispatch = useDispatch();
    const account = JSON.parse(localStorage.getItem('account'))
    const hendleClick = () => {
        window.location.href = '/register'
    }
    const hendleLogOut = () => {
        dispatch(logOut())
        window.location.href = '/'
    }
    console.log(account)
    return (
        <div>
            <div className='headerDiv'>
            <button onClick={hendleClick} className='addUser'>ADD Workers</button>
            <button onClick={hendleLogOut} className='addUser'>Log Out</button>
            <img src={account.avatar} className='avatar'/>
                <h1 className='name'>{account.firstName} {account.lastName}</h1>
            </div>
        </div>
    );
}

export default Headers;
