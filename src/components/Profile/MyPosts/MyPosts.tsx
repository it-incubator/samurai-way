import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post';
import {PostsStateType} from '../../../redux/state';


export type MyPostsPropsType = {
    postsState: PostsStateType
}

export const MyPosts = (props:MyPostsPropsType) => {


    let postsElements = props.postsState
        .map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea name="" id=""></textarea>
                <button>Submit</button>
            </div>
            <div className={'posts'}>
                {postsElements}
            </div>
        </div>
    )
}