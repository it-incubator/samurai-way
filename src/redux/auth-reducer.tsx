
import {Dispatch} from 'redux';
import {AppActionTypes} from './store-redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import login from '../components/Login/Login';

//ACTIONS
export const setAuthUserData = (data: AuthData) => {
    return {
        type: 'SET-USER-DATA', data
    } as const
}

//THUNKS
export const getAuthTC = () => (dispatch: Dispatch<AppActionTypes>) => {
    authAPI.me().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({...data.data, isAuth: true}))
            }
        })
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<AppActionTypes>) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthTC())
            } else {
                let message= data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit("login", {_error: message}))
            }}
        )
}
export const logoutUserTC = () => (dispatch: Dispatch<AppActionTypes>) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({...data.data, id:null,email:null,login:null, isAuth: false}))
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
                ...action.data
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
