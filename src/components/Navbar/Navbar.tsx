import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from 'react-router-dom';



export const Navbar: React.FC = () => {
    const setActive = ({isActive}: { isActive: boolean }) =>
        isActive ? c.active : c.item;

    return (
            <div className={c.navbar}>
                <div><NavLink className={setActive}
                              to="/profile">Profile</NavLink></div>
                <div><NavLink className={setActive}
                              to="/dialogs">Messages</NavLink></div>
                <div><NavLink className={setActive}
                              to="/users">Find Users</NavLink></div>
                <div><NavLink className={setActive}
                              to="/news">News</NavLink></div>
                <div><NavLink className={setActive}
                              to="/music">Music</NavLink></div>
                <div><NavLink className={setActive}
                              to="/settings">Settings</NavLink></div>
            </div>
    )
}