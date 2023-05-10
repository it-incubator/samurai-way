import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {getProfileResponseType} from './ProfileContainer';

type ProfilePropsType= {
    profile: getProfileResponseType
    status: string
    updateStatusTC: (status: string)=> void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusTC={props.updateStatusTC}
            />
            <MyPostsContainer
            />
        </div>
    )
}