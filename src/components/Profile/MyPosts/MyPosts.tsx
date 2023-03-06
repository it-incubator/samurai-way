import React, {useRef, useState} from 'react';
import c from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType={
    posts: PostType[]
    addPost:(value:string)=> void
}

export const MyPosts: React.FC<MyPostsPropsType>=(props)=> {

    const postDataMap = props.posts
        .map(el => <Post key={el.id} id={el.id} message={el.message} likes={el.likes}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null) //create link for textArea
    const addPost = () => {
        if (newPostEl.current !== null) {
            props.addPost(newPostEl.current.value)
            newPostEl.current.value=''
        }
    }

    return (
        <div className={c.profile__postsWrapper}>
            <div className={c.profile__posts}>
                <h3>My posts</h3>
                <textarea ref={newPostEl}></textarea>
                <button className={c.profile__button}
                        onClick={addPost}
                >Add post </button>
            </div>
            {postDataMap}
        </div>

    )
}
