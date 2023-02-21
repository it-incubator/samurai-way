import {AllAction,  StoreType} from "./state";


export  const dialogsReducer= (state:StoreType,action:AllAction) => {

    switch (action.type) {
        case 'AddPostDialogs': {
            let newPost ={id:6,message:action.newDialogs}
            state._State.message.push(newPost)
            break
        }


        default :return state
    }
}
