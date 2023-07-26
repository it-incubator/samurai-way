import React from 'react';
import  s from './Navbar.module.css'
import {NavLink} from "react-router-dom";






export const Navbar = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink} className={s.style}> Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink} className={s.style}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/user' activeClassName={s.activeLink} className={s.style}>User</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Music'activeClassName={s.activeLink} className={s.style}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Setting' activeClassName={s.activeLink} className={s.style}>Setting</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/sidebar' activeClassName={s.activeLink} className={s.style}>Sidebar</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/login' activeClassName={s.activeLink} className={s.style}>Login</NavLink>
                </div>
            </nav>
        </div>
    );
};

