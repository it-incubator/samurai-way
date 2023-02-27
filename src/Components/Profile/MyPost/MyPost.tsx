import React, {ChangeEvent} from 'react';
import  s from './MyPost.module.css'
import {PostData} from "../../../App";
import {AddPost, AddPostActionCreator, AddPostDialogs, UpdateText, UpdateTextActionCreator} from "../../../Redux/state";

type MyPost = {
    PostData?:PostData[]
    dispatch:(action:AddPost|AddPostDialogs|UpdateText)=>void
    newPostText?:string

}






export  const MyPost = (props:MyPost) => {




    const AddPost = ()=> {
            props.dispatch(AddPostActionCreator(props.newPostText?))


    }


const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        let newPost =e.currentTarget.value
    if (newPost.trim() !=='') {
        props.dispatch(UpdateTextActionCreator(newPost))
    }
}


    return (
        <div>
         <div className={s.style}>{
             props.PostData?.map((p)=>{
                 return (
                     <li>
                         {p.message}{p.likeCount}
                     </li>
                 )
             })
         }</div>
            <input onChange={onChangeHandler} value={props.newPostText} />

            <button  onClick={AddPost} className={s.style_Button}>Add Post</button>

        </div>
    );
};

