import React from 'react';
import  s from './MyPost.module.css'
import {PostData} from "../../../App";

type MyPost = {
    PostData:PostData[]
}


export  const MyPost = (props:MyPost) => {
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
            <input/>
            <button className={s.style_Button} >Add Post</button>

        </div>
    );
};

