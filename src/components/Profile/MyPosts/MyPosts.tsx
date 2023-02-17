import React from 'react';
import c from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType={
    posts: PostType[]
}

export const MyPosts: React.FC<MyPostsPropsType>=(props)=> {

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