import {v1} from 'uuid';

export type PostType = {
    id: string
    message: string
    likes: number
}
export type newPostTextType = string
export type ProfileActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC>
export type initialStateProfileType = typeof initialState
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        newPost: postText
    } as const
}
export const updatePostTextAC = (updatePostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        updatePostText: updatePostText
    } as const
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likes: 15},
        {id: v1(), message: 'Hi, im fine thank you, and you?', likes: 10}
    ] as Array<PostType>,
    newPostText: '' //update from MyPosts textarea
}

const profileReducer = (state: initialStateProfileType = initialState, action: ProfileActionTypes)
    : initialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: v1(), message: action.newPost, likes: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.updatePostText}
        default:
            return state;
    }
}

export default profileReducer;