import React from 'react';
import city from "../../../image/iceland.jpg";
import s from '../Profile.module.css'
import {ProfileInfo} from "./ProfileInfo";
import {MyPostContainer} from "../MyPost/MyPostContainer";
import {ProfileType} from "../../../API/Profile-api";
import {ProfileStatus} from "./ProfileStatus.";


type ProfileTypeProfile = {
    profileInfo: ProfileType
    status: string
    changeStatusCallback: (e: string) => void
    isOwners: boolean
    savePhoto:(photo: FormData)=>void
}


export const Profile: React.FC<ProfileTypeProfile> = ({
                                                          profileInfo,
                                                          status,
                                                          changeStatusCallback,
                                                          isOwners,
                                                          savePhoto,...props
                                                      }) => {

    const changeStatus = (e: string) => {
        changeStatusCallback(e)
    }
    return (
        <div className={s.content}>
            <div className={s.style}>
                <img className={s.city_img} src={city}/>

            </div>
            <ProfileInfo profileInfo={profileInfo} isOwners={isOwners} savePhoto={savePhoto}/>
            <ProfileStatus status={status} changeStatusCallback={changeStatus}/>
            <MyPostContainer/>

        </div>

    );
};