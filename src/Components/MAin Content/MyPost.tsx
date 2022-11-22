import React from 'react';
import Vikings from '../../image/Vikings.png';
import  s from './MyPost.module.css'

export  const MyPost = () => {
    return (
        <div>
         <div>My post</div>
            <input/>
            <button>Add Post</button>
            <div><div>Avatar</div>


            <img className={s.img} src={Vikings}/></div>
        </div>
    );
};

