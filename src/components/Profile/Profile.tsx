import React from 'react';
import c from './Profile.module.css';
import bg from './bg.jpeg';

export const Profile = (props: any) => {
    console.log("Profile rendered")
    return <div className={c.profile}>
        <div className={c.profile__logo}>
            <img src={bg} alt="bg" />
        </div>
        <div className={c.profile__about}>
            <img src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png" alt="ava" />
            <div>
                <span>Pavel Durov</span>
                <ul>
                    <li>Date of Birth: 2 january</li>
                    <li>City: Perm</li>
                    <li>Education: PTU22</li>
                    <li>WebSite: https//......</li>
                </ul>
            </div>
        </div>
        <div className={c.profile__posts}>my posts
            <span></span>
            <div className={c.profile__form}>form</div>
            <div className={c.profile__button}>button</div>
        </div>
        <div className={c.profile__message}>message1</div>
        <div className={c.profile__message}>message2</div>
    </div>
}