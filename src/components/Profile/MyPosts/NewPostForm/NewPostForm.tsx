import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

export type PostFormDataType = {
    newPost: string

}

const PostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" component="textarea" name="newPost"/>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const PostReduxForm = reduxForm<PostFormDataType>({form: 'myPostsNewPostForm'})(PostForm)






