import  {addMessageAC} from './dialogs-reducer';
import {addPost} from './profile-reducer';


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
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
 type SideBarFriendType = {
    id: string
    name: string
}
 type SideBarType = {
    friends: SideBarFriendType[]
}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}

export type  StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

//===================ACTIONS TYPES
type ActionTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof addPost>

//=================== STORE
// export let store: StoreType = {
//     _state: {ß
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: 'Sasha'},
//                 {id: v1(), name: 'Tanya'},
//                 {id: v1(), name: 'Artem'},
//                 {id: v1(), name: 'Regina'},
//                 {id: v1(), name: 'Maksim'},
//             ],
//             messages: [
//                 {id: v1(), message: 'Hello ! Dear friend !'},
//                 {id: v1(), message: 'im afraid of this lessons'},
//                 {id: v1(), message: 'when will you return?'},
//                 {id: v1(), message: 'What films do you prefer?'},
//                 {id: v1(), message: 'How are you?'},
//             ],
//             newMessageText: '' //update from Dialogs textarea
//         },
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hi, how are you?', likes: 15},
//                 {id: v1(), message: 'Hi, im fine thank you, and you?', likes: 10}
//             ],
//             newPostText: '' //update from MyPosts textarea
//         },
//         sideBar: {
//             friends: [
//                 {id: v1(), name: 'Sasha'},
//                 {id: v1(), name: 'Kolya'},
//                 {id: v1(), name: 'Andrey'},
//             ]
//         },
//     },
//     _rerenderEntireTree() {
//         console.log('State changed')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observerRerender: () => void) { //get rerender from index.tsx
//         this._rerenderEntireTree = observerRerender // observer pattern
//     },
//
// // =================== DISPATCH METHODS
//
//     dispatch(action: DialogsActionTypes & ProfileActionTypes) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action); //returns new part of State
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action); //returns new part of State
//         this._state.sideBar = sidebarReducer(this._state.sideBar, action); //returns new part of State
//         this._rerenderEntireTree()
//     }
// }




