import React from 'react';
import styles from './Profile.module.scss'
import {MyPosts, MyPostsPropsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';





export const Profile = (props: MyPostsPropsType) => {
    return (
        <div className={styles.main}>
            <ProfileInfo description={'Ava'} imgAlt={'Landscape'}
                         imgUrl={'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}/>
            <MyPosts postsState={props.postsState} addPost={props.addPost} newMessage={props.newMessage} changeNewText={props.changeNewText}/>

        </div>
    )
}