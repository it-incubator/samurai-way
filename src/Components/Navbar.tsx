import React from 'react';
import  s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.padding}>
                    <a className={s.style}> Profile</a>
                </div>
                <div className={s.padding}>
                    <a className={s.style}>Messages</a>
                </div>
                <div className={s.padding}>
                    <a className={s.style}>Music</a>
                </div>
                <div className={s.padding}>
                    <a   className={s.style}>Setting</a>
                </div>
            </nav>
        </div>
    );
};

