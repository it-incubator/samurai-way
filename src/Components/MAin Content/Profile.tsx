import React from 'react';
import city from "../../image/iceland.jpg";
import  s from './Profile.module.css'
import {MyPost} from "./MyPost";

export  const Profile = () => {
    return (
<div className={s.content} >
    <div  >
        <img className={s.city_img} src={city}/>Main contain</div>
    <MyPost/>
</div>

    );
};

