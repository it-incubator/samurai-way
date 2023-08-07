import React from 'react';
import s from "../MyPost/MyPost.module.css";
import Vikings from "../../../image/Vikings.png";
import {ProfileType} from "../../../API/Profile-api";


type ProfileInfoType = {
    profileInfo: ProfileType

}



export  const ProfileInfo:React.FC<ProfileInfoType> = ({profileInfo,...props}) => {
    return (
        <div className={s.style}>
            <div><div >{profileInfo.fullName}</div>
                <div>{profileInfo.lookingForAJobDescription}</div>




                {profileInfo.photos.small
                    ?  <img  src={profileInfo.photos.small} className={s.profile_photo}/>
                :<img className={s.img} src={Vikings}/>}

                </div>
        </div>
    );
};

