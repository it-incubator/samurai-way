import React from 'react';
import c from './Post.module.css';
import {postData} from '../../../../index';

type PostsDataType={
    id: string
    message:string
    likes: number
}

export const Post: React.FC<PostsDataType> = (props) => {

    return <div className={c.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbrrOgLfx3xyrV6qAmKyrEimNekZcwCGKiwotVfQ&s" alt="ava" />
        <span>{props.message}</span>
        <span className={c.likes} >{props.likes}</span>
    </div>

}