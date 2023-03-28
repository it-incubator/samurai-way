import React from 'react';
import {addPostAC, initialStateProfileType, updatePostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/store-redux';
import {Dispatch} from 'redux';

type mapStateToPropsType=initialStateProfileType;
type mapDispatchToPropsType= {
    addNewPost: (newPostText: string)=> void
    updateNewPostText:(value: string)=>void
}
export type MyPostsPropsType= mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType):mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addNewPost: (newPostText: string)=> {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText:(value: string)=> {
            dispatch(updatePostTextAC(value))
        }
    }
}

export const MyPostsContainer= connect(mapStateToProps,mapDispatchToProps)(MyPosts);
