import React from 'react'
import styles from './Post.module.css'

export const Post = () => {
    return (
        <div className={styles.item}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="Profile Picture"/>
            <div>
                <p>Some Text in Post</p>
            </div>
            <span>Like</span>
        </div>
    )
}