import {profileAPI, ProfileType} from "../API/Profile-api";
import {Dispatch} from "redux";


export type InitializationStatePageType = {
    post:PostType []
    newPostText:string
    profileInfo: ProfileType
    status:string
}

type PostType = {
    id:number;
    message:string
    likeCount:number
}

const InitializationState:InitializationStatePageType = {
    profileInfo:{
        userId: '',
        lookingForAJob: true,
        lookingForAJobDescription: 'bla',
        fullName: 'Dima',
        contacts: {},
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
        photos: {small:'',large:''},
        small: ''
    },

    post : [{id:1,message:'Hi, how are you?', likeCount:12},
        {id:2,message:'Hi, how are you?', likeCount:10},
        {id:3,message:'Hi, how are you?', likeCount:8},
        {id:4,message:'Hi, how are you?', likeCount:6},],
    newPostText:'it-kamasutra',
    status:''

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

        case 'UPDATE_PROFILE':

            return {...state,profileInfo:action.data}
        case 'SET_STATUS' :{
            return {...state,status:action.status}
        }

        default :return state
    }
}

export type AllAction = AddPost|UpdateText|ProfileInfoAppDate|ProfileStatusType

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

export  type ProfileInfoAppDate =ReturnType<typeof ProfileInfoAppDateAC>


export  const ProfileInfoAppDateAC = (data:ProfileType)=> {
    return {
        type:'UPDATE_PROFILE',
        data:data

    } as const

}

export  type ProfileStatusType =ReturnType<typeof ProfileStatusAC>


export  const ProfileStatusAC = (status:string)=> {
    return {
        type:'SET_STATUS',
        status

    } as const

}

export const ThunkGetUser =(userId:string) => (dispatch:Dispatch) => {
    profileAPI.getUser(userId).then((res) => {dispatch(ProfileInfoAppDateAC(res.data))})

}

export const ThunkGetStatus =(userId:string)=> (dispatch:Dispatch)=> {
    profileAPI.getStatus(userId).then((res)=>{
        dispatch(ProfileStatusAC(res.data))
    })
}

export const ThunkChangStatus =(status:string)=> (dispatch:Dispatch)=> {
    profileAPI.updateStatus(status).then((res)=>{

        if (res.data.resultCode===0){
            dispatch(ProfileStatusAC(status))
        }

    })
}





