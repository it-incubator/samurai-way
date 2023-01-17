import React from 'react';

import  s from './MyPost.module.css'

export  const MyPost = () => {
    return (
        <div>
         <div className={s.style}>My post</div>
            <input/>
            <button className={s.style_Button} >Add Post</button>

        </div>
    );
};

