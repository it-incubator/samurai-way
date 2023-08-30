import {AuthAPI, AuthDataType, AuthInitializationStateType} from "../API/Auth-api";
import {Dispatch} from "redux";
import {FormDataType} from "../Components/Login/Login";
import {stopSubmit} from "redux-form";




const AuthInitializationState: AuthInitializationStateType = {
    data: {
        id: '1',
        email: '',
        login: ''
    },
    resultCode: 0,
    messages: [],
    isAuth:false,
    loading:false

}


export const authReducer = (state = AuthInitializationState, action: setLoginType|SET_AuthACType|LoadingType) => {

    switch (action.type) {
        case "AUTH": {
            return {...state,isAuth:action.payload.isAuth}
        }

        case "SET-AUTH":
            return {
                ...state,data:action.payload.data
            }
        case 'LOADING':
            return {
                ...state,loading:action.payload.loading
            }

        default :
            return state
    }
};


export  type  setLoginType = ReturnType<typeof setLoginAC>


export const setLoginAC = (isAuth:boolean) => {

    return {
        type: 'AUTH',
        payload: {
           isAuth

        }
    } as const

}

export  type  SET_AuthACType = ReturnType<typeof SET_AuthAC>


export const SET_AuthAC = ( data: AuthDataType) => {

    return {
        type: 'SET-AUTH',
        payload: {

            data

        }
    } as const

}

export  type  LoadingType = ReturnType<typeof LoadinAC>

export const LoadinAC = ( loading:boolean) => {

    return {
        type: 'LOADING',
        payload: {

            loading

        }
    } as const

}

export const ThunkAuth = () => (dispatch:Dispatch)=> {
    AuthAPI.getUser()

        .then((res) => {
            if (res.data.resultCode===0){
                dispatch(SET_AuthAC(res.data.data));
                dispatch(setLoginAC(true))
                dispatch(LoadinAC(true))
            }
            else {
                dispatch(setLoginAC(false))
                dispatch(LoadinAC(true))
            }

        })
        .catch((error)=>{
            'not auturized'
        })

}

export const ThunkLogin =(formData:FormDataType)=> (dispatch:Dispatch)=> {




    AuthAPI.createLogin(formData)
        .then((res) => {

            if (res.data.resultCode===0)

            {dispatch(setLoginAC(true))

                ThunkAuth()

            }
            else {


                dispatch( stopSubmit('login', {_error:res.data.messages}))
            }

        })
        .catch((error)=>{
            console.log(error)
        })
}

export const ThunkLogout=()=> (dispatch:Dispatch)=> {
    AuthAPI.logout().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setLoginAC(false))
        } else {
            console.log('Error')
        }

    })
        .catch((error) => {
            console.log(error)
        })

}