export type storeType = {
    _state: stateType
    changeNewText: (newText: string) => void
    addPost: () => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
}

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


const store: storeType = {
    _state: {
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

    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._onChange()
    },
    addPost() {
        let newPost: PostItemStateType = {
            id: 5,
            message: this._state.profilePage.messageForNewPost,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.messageForNewPost = '';
        this._onChange()
    },
    _onChange() {
        console.log('state changed')
    },

    subscribe(callback: () => void) {
        this._onChange = callback
    },
    getState() {
        return this._state
    }
}

export default store