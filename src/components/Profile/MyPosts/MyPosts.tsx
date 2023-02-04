import React from 'react';
import c from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={c.profile__postsWrapper}>
            <div className={c.profile__posts}>
                <span>My posts</span>
                <textarea className={c.profile__form}></textarea>
                <button className={c.profile__button}> Send </button>
            </div>
            <Post message='Hi, how are you?' like={10} />
            <Post message='Hi, im fine thank you, and you?' like={15} />
        </div>

    )
}