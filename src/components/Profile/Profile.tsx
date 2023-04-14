import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {getProfileResponseType} from './ProfileContainer';

type ProfilePropsType= {
    profile: getProfileResponseType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
            />
        </div>
    )
}