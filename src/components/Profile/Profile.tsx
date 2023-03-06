import React from 'react';
import c from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType={
    profilePage: ProfilePageType
    addPost:(value:string)=> void
}

export const Profile: React.FC<ProfilePropsType>=(props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
            />
        </div>
    )
}