import {v1} from 'uuid';
import {rerenderEntireTree} from '../render';

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
}
export type ProfilePageType = {
    posts: PostType[]

}
export type SideBarFriendType={
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


export let state: RootStateType  = {
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
        ]
    },
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likes: 15},
            {id: v1(), message: 'Hi, im fine thank you, and you?', likes: 10}
        ]
    },
    sideBar: {
        friends: [
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Kolya'},
            {id: v1(), name: 'Andrey'},
        ]
    },
}

export const addPost = (value:string) => {
    let newPost={id:v1(), message: value, likes: 0}
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

