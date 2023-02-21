import {AllAction,  StoreType} from "./state";


export  const pageReducer= (state:StoreType,action:AllAction) => {

    switch (action.type) {
        case 'ADD-Post': {
            let newPost =
                {id: 6, message: state._State.profilePage.newPostText, likeCount: 18}

            state._State.profilePage.post.push(newPost)
            state._State.profilePage.newPostText = ''
           break
        }
        case 'UpdateText': {

                state._State.profilePage.newPostText=action.newText
            break
        }

        default :return state
}
    }




