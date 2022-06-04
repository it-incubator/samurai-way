import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom';

/*type styleType = {
    nav: string,
    item: string,
    item active: string
}*/


export const Nav = () =>{
    return(
        <nav className={s.nav}>
            <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Message</NavLink>
            <NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink>
            <NavLink to="/settings" className={s.item} activeClassName={s.active}>Settings</NavLink>
        </nav>
    )
}