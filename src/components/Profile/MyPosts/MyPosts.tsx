import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={styles.posts}>
            My posts
            <div>
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