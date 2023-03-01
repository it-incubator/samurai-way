import React from 'react';
import {PostData} from "../../../App";

import {MyPost} from "./MyPost";
import {AddPost, AddPostActionCreator, UpdateText, UpdateTextActionCreator} from "../../../Redux/pageReducer";

type MyPostContainer = {
    PostData?:PostData[]
    dispatch:(action:AddPost|UpdateText)=>void
    newPostText:string

}






export  const MyPostContainer = (props:MyPostContainer) => {




    const AddPost = ()=> {
        props.dispatch(AddPostActionCreator(props.newPostText))

    }

    const UpdatePost = (newPost:string)=> {
        props.dispatch(UpdateTextActionCreator(newPost))
    }




    return (
        <div>
          <MyPost  PostData={props.PostData} newPostText={props.newPostText} addPost={AddPost} UpdatePost={UpdatePost} />
        </div>
    );
};

