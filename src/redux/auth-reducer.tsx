//ACTIONS
import {Dispatch} from 'redux';
import {AppActionTypes} from './store-redux';
import {authAPI} from '../api/api';

export const setAuthUserData = (data: AuthData) => {
    return {
        type: 'SET-USER-DATA', data
    } as const
}

//THUNKS
export const getAuthTC=()=>(dispatch:Dispatch<AppActionTypes>)=> {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) dispatch(setAuthUserData(data.data))
        })
}


//STATE
let initialState: AuthData = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
export type initialStateUserDataType = typeof initialState

//REDUCER
export const authReducer = (state: initialStateUserDataType = initialState, action: AuthActionTypes)
    : initialStateUserDataType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

//TYPES
export type AuthData = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionTypes = ReturnType<typeof setAuthUserData>
