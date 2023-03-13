import React, {ChangeEvent, useRef, useState} from 'react';
import c from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionTypes, addPostAC, PostType, updatePostAC} from '../../../redux/state';

type MyPostsPropsType={
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

export const MyPosts: React.FC<MyPostsPropsType>=(props)=> {

    const postDataMap = props.posts
        .map(el => <Post key={el.id} id={el.id} message={el.message} likes={el.likes}/>)

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        props.dispatch(updatePostAC('')) //textarea clean
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostAC(e.currentTarget.value))
        }

    return (
        <div className={c.profile__postsWrapper}>
            <div className={c.profile__posts}>
                <h3>My posts</h3>
                <textarea className={c.profile__form}
                          onChange={onPostChange}
                          value={props.newPostText}
                />
                <button className={c.profile__button}
                        onClick={addPost}
                        disabled={props.newPostText===''}
                >Add post </button>
            </div>
            {postDataMap}
        </div>

    )
}
