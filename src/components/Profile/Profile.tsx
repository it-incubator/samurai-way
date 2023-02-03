import React from 'react';
import c from './Profile.module.css';
import bg from '../../img/bg.jpeg';
import { MyPosts } from './MyPosts/MyPosts';
import { About } from './About/About';

export const Profile = () => {
    return <div className={c.profile}>
        <div className={c.profile__logo}>
            <img src={bg} alt="bg" />
        </div>
        <About />
        <MyPosts />
    </div>
}