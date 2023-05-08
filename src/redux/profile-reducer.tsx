import {v1} from 'uuid';
import {getProfileResponseType} from '../components/Profile/ProfileContainer';
import {Dispatch} from 'redux';
import {AppActionTypes} from './store-redux';
import {usersAPI} from '../api/api';
import {setFollowingProgress, unFollowSuccess} from './users-reducer';


//ACTION CREATORS ======================================================================
export const addPost = (postText: string) => {
    return {type: 'ADD-POST', newPost: postText} as const
}
export const updatePostText = (updateText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', updateText} as const
}
export const setUserProfile = (profileValue: getProfileResponseType) => {
    return {type: 'SET-USER-PROFILE', profileValue} as const
}

//THUNK CREATORS ======================================================================
export const getProfileTC = (userId: string) => {
    return (dispatch: Dispatch<AppActionTypes>) => { //return thunk
        dispatch(setFollowingProgress(+userId, true))
        usersAPI.getProfile(userId)
            .then(data => dispatch(setUserProfile(data)))
    }
}

//STATE ======================================================================
let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likes: 15},
        {id: v1(), message: 'Hi, im fine thank you, and you?', likes: 10}
    ] as Array<PostType>,
    newPostText: '', //update from MyPosts textarea
    profile: null
}

//REDUCER ======================================================================
export const profileReducer = (state: initialStateProfileType = initialState, action: ProfileActionTypes)
    : initialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: v1(), message: action.newPost, likes: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.updateText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profileValue}
        default:
            return state;
    }
}

//TYPES ======================================================================

export type PostType = {
    id: string
    message: string
    likes: number
}
export type ProfileActionTypes = ReturnType<typeof addPost>
                                | ReturnType<typeof updatePostText>
                                | ReturnType<typeof setUserProfile>
export type initialStateProfileType = {
    posts: PostType[]
    newPostText: string
    profile: getProfileResponseType
}
