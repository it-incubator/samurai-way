import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';


export type MyPostsPropsType = {
    postsState: PostsType
    addPost: () => void
    changeNewText: (newText: string) => void
    newMessage: string
}

export const MyPosts = (props: MyPostsPropsType) => {


    const postsElements = props.postsState
        .map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id}/>)

    const addPost = () => {
        props.addPost()
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea name="" id="" value={props.newMessage} onChange={newTextChangeHandler}></textarea>
                <button onClick={addPost}>Submit</button>
            </div>
            <div className={'posts'}>
                {postsElements}
            </div>
        </div>
    )
}