import React, {useEffect, useState} from 'react';
import './navbar.css'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/redux";
import {logout} from "../../store/reducers/user_slice";

const Navbar = () => {

    const {currentUser} = useAppSelector(state => state.currentUserReducer)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div className={'navbar'}>
            <div className={'container flex'}>
                <Link to={'/'} className={'nav_link'}>Chat APP</Link>
                <div className={'nickname'}>{currentUser.nickname}</div>
                {currentUser.nickname !== '' ?
                    <Link to={'/'} className={'nav_link'} onClick={logoutHandler}>Выйти</Link>
                    :
                    <Link to={'/login'} className={'nav_link'}>Войти</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
