import React from 'react';
import c from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
    return <div className={c.profile__posts}>
        <span>My posts</span>
        <div className={c.profile__form}>form</div>
        <div className={c.profile__button}>button</div>
        <Post />
    </div>
}