import React from 'react';
import city from "../../image/iceland.jpg";
import  s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostData} from "../../App";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {AllAction} from "../../Redux/pageReducer";


type PostType = {
    PostData?:PostData[]
    dispatch:(action:AllAction)=>void
    newPostText:string

}

export  const Profile = (props:PostType) => {
    return (
<div className={s.content} >
    <div className={s.style} >
        <img className={s.city_img} src={city}/>Main contain</div>
    <ProfileInfo/>
    <MyPostContainer PostData={props.PostData} dispatch={props.dispatch} newPostText={props.newPostText} />
</div>

    );
};

