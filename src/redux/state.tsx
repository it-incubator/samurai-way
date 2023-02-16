import {v1} from 'uuid';

type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
type PostType = {
    id: string
    message: string
    likes: number
}
type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type ProfilePageType = {
    posts: PostType[]

}
type SideBarType = {}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}


export let state = {
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
    sideBar: {},
}
