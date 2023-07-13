import React from 'react';
import {MyPost} from "./MyPost";
import {
    AddPostActionCreator, InitializationStatePageType,
    UpdateTextActionCreator
} from "../../../Redux/pageReducer";
import { StoreType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";





type mapStateToPropsType ={
    pageReducer:InitializationStatePageType
}

const mapStateToProps =(state:StoreType):mapStateToPropsType=> {
    return {
        pageReducer:state.pageReducer,


    }
}

type mapDispatchToPropsType ={
    updatePost:(newPost:string)=>void
    addPost:(newPostText:string)=>void

}

export type MyPostType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=> {
    return {
        updatePost:(newPost:string)=>{
            dispatch(UpdateTextActionCreator(newPost))
        },
        addPost:(newPostText:string)=> {
            dispatch(AddPostActionCreator(newPostText))
        },

    }
}


export const MyPostContainer =connect(mapStateToProps,mapDispatchToProps)(MyPost)