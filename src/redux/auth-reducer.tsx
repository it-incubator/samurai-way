//ACTIONS
import {Dispatch} from 'redux';
import {AppActionTypes} from './store-redux';
import {authAPI} from '../api/api';

export const setAuthUserData = (data: AuthData) => {
    return {
        type: 'SET-USER-DATA', data
    } as const
}
export const authorizeUser = () => {
    return {
        type: 'LOGIN-USER'
    } as const
}

//THUNKS
export const getAuthTC = () => (dispatch: Dispatch<AppActionTypes>) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                // let {id,login,email}=data.data  // у димыча
                // dispatch(setAuthUserData(id,login,email))  // у димыча
                dispatch(setAuthUserData(data.data))
            }
        })
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<AppActionTypes>) => {
    authAPI.authorize(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authorizeUser())
            }
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
        case 'LOGIN-USER':
            return {...state} // ???
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
export type AuthActionTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof authorizeUser>
