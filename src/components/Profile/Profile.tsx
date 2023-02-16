import React from 'react';
import c from './Profile.module.css';
import bg from '../../img/bg.jpeg';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postData} from '../../index';

type PostsDataType={
    id: string
    message:string
    likes: number
}

type PostsType={
    posts: PostsDataType[]
}

export const Profile: React.FC<PostsType>=(props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts posts={postData}/>
        </div>
    )
}