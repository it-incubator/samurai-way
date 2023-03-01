import React, {ChangeEvent} from 'react';
import  s from './MyPost.module.css'
import {PostData} from "../../../App";


type MyPost = {
    PostData?:PostData[]
    addPost:(newPostText:string)=>void
    newPostText:string
    UpdatePost:(newPost:string)=>void

}






export  const MyPost = (props:MyPost) => {




    const AddPost = ()=> {
            props.addPost(props.newPostText)


    }


const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        let newPost =e.currentTarget.value
    if (newPost.trim() !=='') {
        props.UpdatePost(newPost)
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

