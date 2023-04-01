
import React from "react";

export type InitializationStatePageType = {
    post:PostType []
    newPostText:string
}

type PostType = {
    id:number;
    message:string
    likeCount:number
}

const InitializationState:InitializationStatePageType = {
    post : [{id:1,message:'Hi, how are you?', likeCount:12},
        {id:2,message:'Hi, how are you?', likeCount:10},
        {id:3,message:'Hi, how are you?', likeCount:8},
        {id:4,message:'Hi, how are you?', likeCount:6},],
    newPostText:'it-kamasutra'
}


export  const pageReducer= (state=InitializationState,action:AllAction):InitializationStatePageType => {

    switch (action.type) {

        case 'ADD-Post':
            let newPost =
                {id: 6, message: state.newPostText, likeCount: 18}

           return {
                ...state,newPostText : '',post:[...state.post,newPost]
           }

        case 'UpdateText':

        return {...state,newPostText:action.newText}

        default :return state
    }
}

export type AllAction = AddPost|UpdateText

export type AddPost = ReturnType<typeof AddPostActionCreator>

export  const AddPostActionCreator = (postText:string)=> {
    return {
        type:'ADD-Post',
        postText:postText
    } as const

}

export  type UpdateText =ReturnType<typeof UpdateTextActionCreator>


export  const UpdateTextActionCreator = (newText:string)=> {
    return {
        type:'UpdateText',
        newText:newText
    } as const

}






