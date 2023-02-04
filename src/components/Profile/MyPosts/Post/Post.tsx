import React from 'react';
import c from './Post.module.css';

type messageType = {
    message: string
    like: number
}


export const Post: React.FC<messageType> = (props) => {
    // Реакт функциональная компонента, у которой пропсы = messageType
    return <div className={c.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbrrOgLfx3xyrV6qAmKyrEimNekZcwCGKiwotVfQ&s" alt="ava" />
        <span>{props.message}</span>
        <span className={c.like} >{props.like}</span>
    </div>

}