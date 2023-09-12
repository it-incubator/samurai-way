import React, {ChangeEvent, useState} from 'react';
import s from "../MyPost/MyPost.module.css";
import Vikings from "../../../image/Vikings.png";
import {ProfileType} from "../../../API/Profile-api";
import {ProfileData} from "./PrifileData/ProfileData";
import {FormDataProfile, FormDataProfileType} from "./PrifileData/FormData";


type ProfileInfoType = {
    profileInfo: ProfileType
    isOwners: boolean
    savePhoto: (photo: FormData) => void
    contact: ContactType
    saveProfile: (formData: FormDataProfileType) => void
    EditMode:boolean
    changeEditMode:()=>void
}

export type ContactType = {
    [key: string]: string;

}

export const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                           profileInfo, isOwners,
                                                           savePhoto, contact,
                                                           saveProfile,EditMode,
                                                           changeEditMode, ...props
                                                       }) => {

    const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            savePhoto(formData);
        }
    }


    const ActivateEditMode = () => {
        changeEditMode()

    }

    const changeProfileData = (formData: FormDataProfileType) => {
            saveProfile(formData)

    }

    return (
        <div className={s.style}>
            <div>

                {profileInfo.photos
                    ? <img src={profileInfo.photos.small} className={s.profile_photo}/>
                    : <img className={s.img} src={Vikings}/>

                }

                {EditMode
                    ?
                    <FormDataProfile initialValues={profileInfo} contact={contact}
                                     changeProfileData={changeProfileData}/>
                    : <ProfileData profileInfo={profileInfo} contact={contact} isOwners={isOwners}
                                   ActivateEditMode={ActivateEditMode}/>}


                <span>
     {isOwners && <input type={"file"} onChange={onChangePhoto}/>}
              </span>
            </div>
        </div>
    );
};



