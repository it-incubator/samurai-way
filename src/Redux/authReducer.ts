import {AuthAPI, AuthInitializationStateType} from "../API/Auth-api";
import {Dispatch} from "redux";
import {FormDataType} from "../Components/Login/Login";


const AuthInitializationState: AuthInitializationStateType = {
    data: {
        id: 1,
        email: '',
        login: ''
    },
    resultCode: 0,
    messages: [],
    isAuth:false
}


export const authReducer = (state = AuthInitializationState, action: setLoginType|SET_AuthACType) => {

    switch (action.type) {
        case "AUTH": {
            return {...state,isAuth:action.payload.isAuth}
        }

        case "SET-AUTH":
            return {
                ...state,data:{...state.data,login:action.payload.login}
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


export const SET_AuthAC = ( login: string) => {
    console.log(login)
    return {
        type: 'SET-AUTH',
        payload: {

            login

        }
    } as const

}

export const ThunkAuth =()=> (dispatch:Dispatch)=> {
    AuthAPI.getUser()
        .then((res) => {
            dispatch(SET_AuthAC(res.data.data.login));
            dispatch(setLoginAC(true))
        })
}

export const ThunkLogin =(formData:FormDataType)=> (dispatch:Dispatch)=> {
    AuthAPI.createLogin(formData)
        .then((res) => {
            if (res.data.resultCode===0)
            {dispatch(setLoginAC(true))}
            else {
             console.log(   'Error')
            }

        })
        .catch((error)=>{
            console.log(error)
        })
}