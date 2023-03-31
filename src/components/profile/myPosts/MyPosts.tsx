import { Post } from "./post/Post"

import {myPostsDataType} from "../../../redux/state"
import React, {ChangeEvent} from "react";

type MyPostsPropsType = {
    myPostsData: myPostsDataType[]
    onClickCallBack: (value: string, path: string) => void
    onChangeInput: (value: string) => void
    stateTextAreaValue: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    const {myPostsData, onClickCallBack, onChangeInput, stateTextAreaValue} = props

    const myPostsDataRender = myPostsData.map(element => {
        const {id, post, likeCount} = element

        return <Post message = {post} like = {likeCount} id = {id} key = {id}/>
    })

    const newPostEl = React.createRef<HTMLTextAreaElement>()
    const onClickHandler = () => {
        const post = newPostEl.current ? newPostEl.current.value : ''
        onClickCallBack(post, 'post')
    }
    const onChangeHandler = () => {
        const post = newPostEl.current ? newPostEl.current.value : ''
        onChangeInput(post)
    }

    return (
      <>
        <div className="newPost">
            <textarea ref={newPostEl}></textarea>
            <button onClick={onClickHandler} onChange={onChangeHandler} value={stateTextAreaValue}>New Post</button>
        </div>
        <div className="posts">
            {myPostsDataRender}
        </div>
      </>
    )
}