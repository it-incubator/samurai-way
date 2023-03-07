import React, {useRef, useState} from 'react';
import c from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType, updateNewPostText} from '../../../redux/state';

type MyPostsPropsType={
    posts: PostType[]
    newPostText: string
    addPost:()=> void
    updateNewPostText:(value:string)=> void
}

export const MyPosts: React.FC<MyPostsPropsType>=(props)=> {

    const postDataMap = props.posts
        .map(el => <Post key={el.id} id={el.id} message={el.message} likes={el.likes}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null) //create link for textArea

    const addPost = () => {
            props.addPost()
    }
    const onPostChange = () => {
        if (newPostEl.current !== null) {
            props.updateNewPostText(newPostEl.current.value)
        }
    }

    return (
        <div className={c.profile__postsWrapper}>
            <div className={c.profile__posts}>
                <h3>My posts</h3>
                <textarea ref={newPostEl}
                          onChange={onPostChange}
                          value={props.newPostText}
                />
                <button className={c.profile__button}
                        onClick={addPost}
                >Add post </button>
            </div>
            {postDataMap}
        </div>

    )
}
