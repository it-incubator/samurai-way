import {renderTree} from "../index";

export type StateType = {
    propfilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
export type ProfilePageType ={
    profileInputState: string
    myPostsData: myPostsDataType[]
}
export type myPostsDataType = {
    id: number
    post: string
    likeCount: number
}

export type DialogsPageType = {
    dialogsInputState: string
    dialogsData: DialogsDataType[]
    messagesData: messagesDataType[]
}
export type DialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}

export const state: StateType = {
    propfilePage: {
        profileInputState: '',
        myPostsData: [
            {id: 1, post: 'Hello', likeCount: 10},
            {id: 2, post: 'How are you?', likeCount: 12},
            {id: 3, post: 'Find', likeCount: 77},
        ],
    },

    dialogsPage: {
        dialogsInputState: '',
        dialogsData: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Alexander'},
            {id: 4, name: 'Anton'},
            {id: 5, name: 'Artem'},
        ],
        messagesData: [
            {id: 1, message: '1111'},
            {id: 2, message: '2222'},
            {id: 3, message: '3333'},
            {id: 4, message: '4444'},
            {id: 5, message: '5555'},
        ],
    }
}



export const onClickHandler = (value: string, path: string) => {
   path === 'message' ? addMessage(value) : addPost(value)
}

const addMessage = (value: string) => {
    const newPost: messagesDataType = {
        id: state.dialogsPage.messagesData.length + 1,
        message: value
    }

    state.dialogsPage.messagesData = [...state.dialogsPage.messagesData, newPost]

    state.dialogsPage.dialogsInputState = ''
    renderTree(state)
}
const addPost = (value: string) => {
    const newPost: myPostsDataType = {
        id: state.propfilePage.myPostsData.length + 1,
        post: value,
        likeCount: 0
    }

    state.propfilePage.myPostsData = [...state.propfilePage.myPostsData, newPost]

    renderTree(state)
}

export const onChangeDialogsInput = (value: string) => {
    state.dialogsPage.dialogsInputState = value
    renderTree(state)
    console.log(state.dialogsPage.dialogsInputState)
}
export const onChangePostsInput = (value: string) => {
    state.propfilePage.profileInputState = value
    renderTree(state)
}