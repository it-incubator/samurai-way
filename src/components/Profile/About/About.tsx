import React from 'react';
import c from './About.module.css';

export const About = () => {
    return <div className={c.profile__about}>
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
}