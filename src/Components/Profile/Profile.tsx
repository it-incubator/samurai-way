import React from 'react';
import city from "../../image/iceland.jpg";
import  s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPost/MyPostContainer";




export  const Profile = () => {
    return (
<div className={s.content} >
    <div className={s.style} >
        <img className={s.city_img} src={city}/>Main contain</div>
    <ProfileInfo/>
    <MyPostContainer  />
</div>

    );
};

