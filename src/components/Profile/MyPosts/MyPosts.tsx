import React from 'react';
import c from './MyPosts.module.css';
import {Post} from './Post/Post';
import {v1} from 'uuid';
import {postData} from '../../../index';

type PostsDataType={
    id: string
    message:string
    likes: number
}

type PostsType={
    posts: PostsDataType[]
}

export const MyPosts: React.FC<PostsType>=(props)=> {

    const postDataMap = props.posts
        .map(el => <Post id={el.id} message={el.message} likes={el.likes}/>)

    return (
        <div className={c.profile__postsWrapper}>
            <div className={c.profile__posts}>
                <h3>My posts</h3>
                <textarea className={c.profile__form}></textarea>
                <button className={c.profile__button}> Send </button>
            </div>
            {postDataMap}
        </div>

    )
}