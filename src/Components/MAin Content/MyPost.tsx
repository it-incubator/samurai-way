import React from 'react';
import Vikings from '../../image/Vikings.png';
import  s from './MyPost.module.css'

export  const MyPost = () => {
    return (
        <div>
         <div className={s.style}>My post</div>
            <input/>
            <button className={s.style_Button} >Add Post</button>
            <div><div className={s.style}>Avatar</div>


            <img className={s.img} src={Vikings}/></div>
        </div>
    );
};

