import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea name="" id=""></textarea>
                <button>Submit</button>
            </div>
            <div className={'posts'}>
                <Post message={'Hi, how are you?'} likeCount={15}/>
                <Post message={`It's my first post`} likeCount={1}/>
            </div>
        </div>
    )
}