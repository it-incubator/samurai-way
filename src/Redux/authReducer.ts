import {AuthAPI, AuthDataType, AuthInitializationStateType} from "../API/Auth-api";
import {AnyAction, Dispatch} from "redux";
import {FormDataType} from "../Components/Login/Login";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";


const AuthInitializationState: AuthInitializationStateType = {
    data: {
        id: '1',
        email: '',
        login: ''
    },
    resultCode: 0,
    messages: [],
    isAuth: false,
    loading: false

}


export const authReducer = (state = AuthInitializationState, action: setLoginType | SET_AuthACType | LoadingType) => {

    switch (action.type) {
        case "AUTH": {
            return {...state, isAuth: action.payload.isAuth}
        }

        case "SET-AUTH":
            return {
                ...state, data: action.payload.data
            }
        case 'LOADING':
            return {
                ...state, loading: action.payload.loading
            }

        default :
            return state
    }
};


export  type  setLoginType = ReturnType<typeof setLoginAC>


export const setLoginAC = (isAuth: boolean) => {

    return {
        type: 'AUTH',
        payload: {
            isAuth

        }
    } as const

}

export  type  SET_AuthACType = ReturnType<typeof SET_AuthAC>


export const SET_AuthAC = (data: AuthDataType) => {

    return {
        type: 'SET-AUTH',
        payload: {

            data

        }
    } as const

}

export  type  LoadingType = ReturnType<typeof LoadinAC>

export const LoadinAC = (loading: boolean) => {

    return {
        type: 'LOADING',
        payload: {

            loading

        }
    } as const

}

export const ThunkAuth = () => async (dispatch: Dispatch) => {
    const response = await AuthAPI.getUser()


    if (response.data.resultCode === 0) {
        dispatch(SET_AuthAC(response.data.data));
        dispatch(setLoginAC(true))
        dispatch(LoadinAC(true))
    } else {
        dispatch(setLoginAC(false))
        dispatch(LoadinAC(true))
    }


}

export const ThunkLogin = (formData: FormDataType):ThunkAction<void, StoreType, unknown, AnyAction> => async (dispatch) => {


    const response = await AuthAPI.createLogin(formData)


    if (response.data.resultCode === 0) {
        dispatch(setLoginAC(true))

       dispatch(ThunkAuth())

    } else {


        dispatch(stopSubmit('login', {_error: response.data.messages}))
    }


}

export const ThunkLogout = () => async (dispatch: Dispatch) => {
    const response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setLoginAC(false))
    } else {
        console.log('Error')


    }

}