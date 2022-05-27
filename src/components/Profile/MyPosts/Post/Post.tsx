import React from 'react'
import styles from './Post.module.css'

type PostType = {
    message: string
    likeCount: number
}


export const Post: React.FC<PostType> = (props ) => {
    return (
        <div className={styles.item}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="Profile"/>
            <div className={styles.message}>
                <p>{props.message}</p>
            </div>
            <div className={styles.likes}>
                <span>Likes: {props.likeCount}</span>
            </div>

        </div>
    )
}