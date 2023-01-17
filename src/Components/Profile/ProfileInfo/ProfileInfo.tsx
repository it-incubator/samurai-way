import React from 'react';
import s from "../MyPost/MyPost.module.css";
import Vikings from "../../../image/Vikings.png";

export  const ProfileInfo = () => {
    return (
        <div>
            <div><div className={s.style}>Avatar</div>


                <img className={s.img} src={Vikings}/></div>
        </div>
    );
};

