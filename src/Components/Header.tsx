import React from 'react';
import  s from './Header.module.css'
import flag from '../image/flag.png';

export const Header = () => {
    return (
        <div className={s.header}>
            <header ><img className={s.logo} src={flag}/></header>
        </div>
    );
};

