import {renderEntireTree} from '../render';

export type stateType = {
    profilePage: {
        posts: PostsType
        messageForNewPost: string
    }
    dialogsPage: DialogsPageType

}
export type PostsType = PostItemStateType[]
type PostItemStateType = {
    id: number
    message: string
    likeCount: number
}
export type DialogsPageType = {
    names: NamesItemType[]
    messages: MessageItemType[]
}
type NamesItemType = {
    id: number
    name: string
}
type MessageItemType = {
    id: number
    message: string
    time: string
}


export const state: stateType = {
    dialogsPage: {

        names: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Sanya'},
            {id: 3, name: 'Olya'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Valera'},
            {id: 6, name: 'Viktor'},
        ],
        messages: [
            {id: 1, message: 'Hey', time: '13:15'},
            {id: 2, message: 'Wats up?', time: '13:20'},
            {id: 3, message: '????', time: '13:30'},
        ]

    },


    profilePage: {
        messageForNewPost: '',
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 15},
            {id: 2, message: 'It\'s my first post', likeCount: 1},
            {id: 3, message: 'Hey ho lets go', likeCount: 1}
        ]
    }

}

export const addPost = (postMessage:string) => {
    let newPost: PostItemStateType = {
        id: 5,
        message:postMessage,
        likeCount:0
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}

export const changeNewText = (newText:string)=>{
    state.profilePage.messageForNewPost = newText;
    renderEntireTree(state)
}