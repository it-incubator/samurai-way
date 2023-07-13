import React from 'react';
import s from "../MyPost/MyPost.module.css";
import Vikings from "../../../image/Vikings.png";
import {ProfileType} from "../../../API/Profile-api";

type ProfileInfoType = {
    profileInfo: ProfileType
}



export  const ProfileInfo:React.FC<ProfileInfoType> = ({profileInfo,...props}) => {
    return (
        <div>
            <div><div className={s.style}>{profileInfo.fullName}</div>

                {profileInfo.photos.small
                    ?  <img  src={profileInfo.photos.small} className={s.profile_photo}/>
                :<img className={s.img} src={Vikings}/>}

                </div>
        </div>
    );
};

