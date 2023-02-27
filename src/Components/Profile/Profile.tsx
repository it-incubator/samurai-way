import React from 'react';
import city from "../../image/iceland.jpg";
import  s from './Profile.module.css'
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostData} from "../../App";
import { AllAction} from "../../Redux/state";


type PostType = {
    PostData?:PostData[]
    dispatch:(action:AllAction)=>void
    newPostText?:string

}

export  const Profile = (props:PostType) => {
    return (
<div className={s.content} >
    <div className={s.style} >
        <img className={s.city_img} src={city}/>Main contain</div>
    <ProfileInfo/>
    <MyPost PostData={props.PostData} dispatch={props.dispatch} newPostText={props.newPostText?} />
</div>

    );
};

