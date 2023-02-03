import React from 'react';
import c from './Header.module.css';
import logo from '../../img/logo.png';

export const Header = () => {
    return <div className={c.header}>
        <img src={logo} alt="logo" />
    </div>
}
