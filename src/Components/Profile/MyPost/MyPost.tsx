import React, {ChangeEvent} from 'react';
import  s from './MyPost.module.css'
import {PostData} from "../../../App";
import {AddPost, AddPostDialogs, UpdateText} from "../../../Redux/state";

type MyPost = {
    PostData:PostData[]
    dispatch:(action:AddPost|AddPostDialogs|UpdateText)=>void
    newPostText:string

}


export  const MyPost = (props:MyPost) => {


    let newPost = React.createRef<HTMLInputElement>()

    const AddPost = ()=> {
        if (newPost.current) {
            props.dispatch({type:'ADD-Post'})
        }

    }


const onChangeHandler = ()=> {
    if (newPost.current) {
        props.dispatch({type:'UpdateText',newText:newPost.current?.value.trim()})
    }
}


    return (
        <div>
         <div className={s.style}>{
             props.PostData.map((p)=>{
                 return (
                     <li>
                         {p.message}{p.likeCount}
                     </li>
                 )
             })
         }</div>
            <input onChange={onChangeHandler} ref={newPost} value={props.newPostText} />

            <button  onClick={AddPost} className={s.style_Button}>Add Post</button>

        </div>
    );
};

