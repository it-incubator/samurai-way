import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {StoreReduxType} from '../../redux/store-redux';

type ProfilePropsType = {
    // store: StoreReduxType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer
            />
        </div>
    )
}