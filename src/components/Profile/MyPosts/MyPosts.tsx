import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {PostFormDataType, PostReduxForm} from './NewPostForm/NewPostForm';


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postDataMap = props.posts
        .map(el => <Post key={el.id} id={el.id} message={el.message} likes={el.likes}/>)

    const addPost = (formData: PostFormDataType) => {
        props.addNewPost(formData.newPost);
    }

    return (
        <div className={c.profile__postsWrapper}>
            <div className={c.profile__posts}>
                <h3>My posts</h3>
                <PostReduxForm onSubmit={addPost}/>
            </div>
            {postDataMap}
        </div>

    )
}
