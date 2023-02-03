import React from 'react';
import c from './Navbar.module.css';

export const Navbar = (props: any) => {
    console.log("Navbar rendered")
    return <div className={c.navbar}>
        <div className={c.item}><a href="#.">Profile</a></div>
        <div className={c.item}><a href="#.">News</a></div>
        <div className={c.item}><a href="#.">Music</a></div>
        <div className={c.item}><a href="#.">Settings</a></div>
        <div className={c.item}><a href="#.">Messages</a></div>
    </div>
}