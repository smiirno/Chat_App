import React from 'react';
import './navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {

    const user = false

    return (
        <div className={'navbar'}>
            <div className={'container flex'}>
                <Link to={'/'} className={'nav_link'}>Chat APP</Link>
                {user ?
                    <Link to={'/'} className={'nav_link'}>Выйти</Link>
                    :
                    <Link to={'/login'} className={'nav_link'}>Войти</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
