import React from 'react';
import c from './Header.module.css';
import logo from '../../img/logo.png';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';

type HeaderPropsType = HeaderContainerPropsType

export const Header = (props: HeaderPropsType) => {

    return <div className={c.header}>
        <img src={logo} alt="logo"/>
        <div className={c.loginBlock}>
            {props.isAuth?
                <div className={c.userName}>{props.login}</div>
            : <NavLink  className={c.loginLink} to="/login">Login</NavLink>
            }
        </div>
    </div>
}
