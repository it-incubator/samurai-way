import {photoType, profileAPI, ProfileType} from "../API/Profile-api";
import {AnyAction, Dispatch} from "redux";
import {FormDataProfileType} from "../Components/Profile/ProfileInfo/PrifileData/FormData";
import {StoreType} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";


export type InitializationStatePageType = {
    post: PostType []
    newPostText: string
    profileInfo: ProfileType
    status: string
    editMode:boolean
}

type PostType = {
    id: number;
    message: string
    likeCount: number
}

const InitializationState: InitializationStatePageType = {
    profileInfo: {
        userId: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Dima',
        contacts:
            {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            },
        photos:
            {
                small: '',
                large: ''
            },

    },

    post: [{id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'Hi, how are you?', likeCount: 10},
        {id: 3, message: 'Hi, how are you?', likeCount: 8},
        {id: 4, message: 'Hi, how are you?', likeCount: 6},],
    newPostText: 'it-kamasutra',
    status: '',
    editMode:false
}


export const pageReducer = (state = InitializationState, action: AllAction): InitializationStatePageType => {

    switch (action.type) {

        case 'ADD-Post':
            let newPost =
                {id: 6, message: state.newPostText, likeCount: 18}

            return {
                ...state, newPostText: '', post: [...state.post, newPost]
            }

        case 'UpdateText':
            return {...state, newPostText: action.newText}

        case 'UPDATE_PROFILE':
            return {...state, profileInfo: action.data}

        case 'SET_STATUS' : {
            return {...state, status: action.status}
        }
        case 'UPDATE_PHOTO' : {
            return {
                ...state,
                profileInfo: {...state.profileInfo, photos: action.photo}
            }
        }
        case "EDIT_MODE":{
            return {
                ...state, editMode:action.editMode
            }
        }

        default :
            return state
    }
}

export type AllAction = AddPost | UpdateText | ProfileInfoAppDate | ProfileStatusType | ProfilePhotoType|EditModeType

export type AddPost = ReturnType<typeof AddPostActionCreator>

export const AddPostActionCreator = (postText: string) => {
    return {
        type: 'ADD-Post',
        postText: postText
    } as const

}

export  type UpdateText = ReturnType<typeof UpdateTextActionCreator>


export const UpdateTextActionCreator = (newText: string) => {
    return {
        type: 'UpdateText',
        newText: newText
    } as const

}

export  type ProfileInfoAppDate = ReturnType<typeof ProfileInfoAppDateAC>


export const ProfileInfoAppDateAC = (data: ProfileType) => {
    return {
        type: 'UPDATE_PROFILE',
        data: data

    } as const

}

export  type ProfileStatusType = ReturnType<typeof ProfileStatusAC>


export const ProfileStatusAC = (status: string) => {
    return {
        type: 'SET_STATUS',
        status

    } as const

}


export  type ProfilePhotoType = ReturnType<typeof ProfilePhotoAC>
export const ProfilePhotoAC = (photo: photoType) => {
    return {
        type: 'UPDATE_PHOTO',
        photo

    } as const
}

export  type EditModeType = ReturnType<typeof EditModeAC>
export const EditModeAC = (editMode: boolean) => {
    return {
        type: 'EDIT_MODE',
        editMode

    } as const
}

export const ThunkGetUser = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getUser(userId)
    dispatch(ProfileInfoAppDateAC(response.data))

}

export const ThunkGetStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(ProfileStatusAC(response.data))

}

export const ThunkChangStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(ProfileStatusAC(status))
    }

}

export const ThunkSavePhoto = (photo: FormData): ThunkAction<void, StoreType, unknown, AnyAction> => async (dispatch, getState: () => StoreType) => {


    const userId = getState().authReducer.data.id
    const response = await profileAPI.updatePhoto(photo)


    if (response.data.resultCode === 0) {

        dispatch(ProfilePhotoAC(response.data.photos))
        dispatch(ThunkGetUser(userId))
    }

}

export const ThunkSaveProfile = (formData: FormDataProfileType): ThunkAction<void, StoreType, unknown, AnyAction> => async (dispatch, getState: () => StoreType) => {

    const userId = getState().authReducer.data.id
    const response = await profileAPI.updateProfile(formData)

    if (response.data.resultCode === 0) {
        dispatch(ThunkGetUser(userId))
        dispatch(EditModeAC(false))

    } else {
        dispatch(stopSubmit('profile', {_error:response.data.messages[0]}))

    }

}





