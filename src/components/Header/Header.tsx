import React from 'react';
import c from './Header.module.css';
import logo from './logo.png';

export const Header = (props: any) => {
    console.log("Header rendered")
    return <div className={c.header}>
        <img src={logo} alt="logo" />
    </div>
}
