import {AuthInitializationStateType} from "../API/Auth-api";


const AuthInitializationState: AuthInitializationStateType = {
    data: {
        id: 1,
        email: '',
        login: ''
    },
    resultCode: 0,
    messages: []
}


export const authReducer = (state = AuthInitializationState, action: AuthACType|SET_AuthACType) => {

    switch (action.type) {
        case "AUTH": {
            return state
        }

        case "SET-AUTH":
            return {
                ...state,data:{...state.data,login:action.payload.login}
            }


        default :
            return state
    }
};


export  type  AuthACType = ReturnType<typeof AuthAC>


export const AuthAC = (email: string, login: string) => {
    console.log(email,login)
    return {
        type: 'AUTH',
        payload: {
            email,
            login

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