import {v1} from 'uuid';

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    likes: number
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type SideBarFriendType = {
    id: string
    name: string
}
export type SideBarType = {
    friends: SideBarFriendType[]
}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}

let rerenderEntireTree = (props: any) => {
    //get rerender to call it in functions
}
export const subscribe = (observer: (state:RootStateType) => void) => { //get rerender from index.tsx
    rerenderEntireTree = observer // observer pattern
}

export let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Tanya'},
            {id: v1(), name: 'Artem'},
            {id: v1(), name: 'Regina'},
            {id: v1(), name: 'Maksim'},
        ],
        messages: [
            {id: v1(), message: 'Hello ! Dear friend !'},
            {id: v1(), message: 'im afraid of this lessons'},
            {id: v1(), message: 'when will you return?'},
            {id: v1(), message: 'What films do you prefer?'},
            {id: v1(), message: 'How are you?'},
        ],
        newMessageText: '' //update from Dialogs textarea
    },
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likes: 15},
            {id: v1(), message: 'Hi, im fine thank you, and you?', likes: 10}
        ],
        newPostText: '' //update from MyPosts textarea
    },
    sideBar: {
        friends: [
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Kolya'},
            {id: v1(), name: 'Andrey'},
        ]
    },
}

export const addPost = () => {
    let newPost = {id: v1(), message: state.profilePage.newPostText, likes: 0}
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export const addMessage = () => {
    let newMessage = {id: v1(), message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}
export const updateNewMessageText = (newMess: string) => {
    state.dialogsPage.newMessageText = newMess
    rerenderEntireTree(state)
}



