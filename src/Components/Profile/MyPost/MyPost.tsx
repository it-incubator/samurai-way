import React, {ChangeEvent} from 'react';
import  s from './MyPost.module.css'
import {PostData} from "../../../App";

type MyPost = {
    PostData:PostData[]
    addPost:()=>void
    newPostText:string
    ChangeText:(newText:string)=>void
}


export  const MyPost = (props:MyPost) => {


    let newPost = React.createRef<HTMLInputElement>()

    const AddPost = ()=> {
        if (newPost.current) {
            props.addPost()
        }

    }


const onChangeHandler = ()=> {
    if (newPost.current) {
        props.ChangeText(newPost.current?.value.trim())
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

