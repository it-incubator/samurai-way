export type stateType = {
    postsState: PostsStateType
    dialogsState: DialogsStateType
}
export type PostsStateType = PostItemStateType[]
type PostItemStateType = {
    id: number
    message: string
    likeCount: number
}
export type DialogsStateType = {
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
}


export const state: stateType = {

    dialogsState: {
        names: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Sanya'},
            {id: 3, name: 'Olya'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Valera'},
            {id: 6, name: 'Viktor'},
        ],
        messages: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'Wats up?'},
            {id: 3, message: '????'},
        ]
    },

    postsState: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 1},
        {id: 3, message: 'Hey ho lets go', likeCount: 1}
    ]
}