import React, {ChangeEvent} from 'react';
import s from "../MyPost/MyPost.module.css";
import Vikings from "../../../image/Vikings.png";
import {ProfileType} from "../../../API/Profile-api";


type ProfileInfoType = {
    profileInfo: ProfileType
    isOwners: boolean
    savePhoto: (photo: FormData) => void

}


export const ProfileInfo: React.FC<ProfileInfoType> = ({profileInfo, isOwners, savePhoto, ...props}) => {

    const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            savePhoto(formData);
        }
    }

    return (
        <div className={s.style}>
            <div>
                <div>{profileInfo.fullName}</div>
                <div>{profileInfo.lookingForAJobDescription}</div>


                {profileInfo.photos.small
                    ? <img src={profileInfo.photos.small} className={s.profile_photo}/>
                    : <img className={s.img} src={Vikings}/>

                }
            </div>
            <span>
     {isOwners && <input type={"file"} onChange={onChangePhoto}/>}
              </span>
        </div>
    );
};

