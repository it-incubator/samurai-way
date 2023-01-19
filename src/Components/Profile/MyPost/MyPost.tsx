import React from 'react';
import  s from './MyPost.module.css'
import {PostData} from "../../../App";

type MyPost = {
    PostData:PostData[]

}


export  const MyPost = (props:MyPost) => {


    let newPost = React.createRef<HTMLTextAreaElement>()

    const AddPost = ()=> {

        alert(newPost.current?.value)
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
            <textarea  ref={newPost}/>

            <button  onClick={AddPost} className={s.style_Button}>Add Post</button>

        </div>
    );
};

