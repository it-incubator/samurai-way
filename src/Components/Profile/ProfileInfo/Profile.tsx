import React from 'react';
import city from "../../../image/iceland.jpg";
import  s from '../Profile.module.css'
import {ProfileInfo} from "./ProfileInfo";
import {MyPostContainer} from "../MyPost/MyPostContainer";
import {ProfileType} from "../../../API/Profile-api";
import {Redirect} from "react-router-dom";


type ProfileTypeProfile = {
    profileInfo: ProfileType

}


export  const Profile:React.FC<ProfileTypeProfile> = ({profileInfo,...props}) => {


    return (
        <div className={s.content} >
            <div className={s.style} >
                <img className={s.city_img} src={city}/>

            </div>
            <ProfileInfo profileInfo={profileInfo} />
            <MyPostContainer  />
        </div>

    );
};