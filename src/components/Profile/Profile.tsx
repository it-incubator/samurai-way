import React from 'react';
import c from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType={
    profilePage: ProfilePageType
    addPost:()=> void
    updateNewPostText:(value:string)=> void
}

export const Profile: React.FC<ProfilePropsType>=(props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}