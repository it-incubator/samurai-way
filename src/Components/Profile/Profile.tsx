import React from 'react';
import city from "../../image/iceland.jpg";
import  s from './Profile.module.css'
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostData} from "../../App";

type PostType = {
    PostData:PostData[]
}

export  const Profile = (props:PostType) => {
    return (
<div className={s.content} >
    <div className={s.style} >
        <img className={s.city_img} src={city}/>Main contain</div>
    <ProfileInfo/>
    <MyPost PostData={props.PostData}/>
</div>

    );
};

