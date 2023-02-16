import React from 'react';
import c from './ProfileInfo.module.css';
import bg from '../../../img/bg.jpeg';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={c.logo}>
                <img src={bg} alt="bg"/>
            </div>

            <div className={c.about}>
                <img src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
                     alt="ava"/>
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
        </div>
    )
}