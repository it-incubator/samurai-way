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

export type  StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

//===================ACTIONS TYPES
export type ActionTypes = ReturnType<typeof addMessageAC>
                        | ReturnType<typeof updateMessageAC>
                        | ReturnType<typeof addPostAC>
                        | ReturnType<typeof updatePostAC>

//===================ACTIONS
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        newPost: postText
    } as const
}  //returns action type and then goes to dispatch case
export const updatePostAC = (postTextUpdate: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        postTextUpdate: postTextUpdate
    } as const
} //returns action type and then goes to dispatch case
export const addMessageAC = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMess: messageText
    } as const
} //returns action type and then goes to dispatch case
export const updateMessageAC = (messageUpdateText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        messageUpdateText: messageUpdateText
    } as const
} //returns action type and then goes to dispatch case

//=================== STORE
export let store: StoreType = {
    _state: {
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
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observerRerender: () => void) { //get rerender from index.tsx
        this._rerenderEntireTree = observerRerender // observer pattern
    },

// =================== DISPATCH METHODS

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {id: v1(), message: action.newPost, likes: 0}
                if (this._state.profilePage.newPostText !== '') {
                    this._state.profilePage.posts.push(newPost)
                    this._rerenderEntireTree()
                } break;
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.postTextUpdate
                this._rerenderEntireTree();
                break;
            case 'ADD-MESSAGE':
                let newMessage = {id: v1(), message: action.newMess}
                if (this._state.dialogsPage.newMessageText !== '') {
                    this._state.dialogsPage.messages.push(newMessage);
                    this._rerenderEntireTree()
                } break;
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.messageUpdateText
                this._rerenderEntireTree()
        }
    }
}




