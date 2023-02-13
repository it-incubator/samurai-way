import React from 'react';
import c from './Navbar.module.css';

export const Navbar = (props: any) => {
    console.log("Navbar rendered")
    return <div className={c.navbar}>
        <div className={c.item}><a href="/profile">Profile</a></div>
        <div className={c.item}><a href="/dialogs">Messages</a></div>
        <div className={c.item}><a href="/news">News</a></div>
        <div className={c.item}><a href="/music">Music</a></div>
        <div className={c.item}><a href="/settings">Settings</a></div>
    </div>
}