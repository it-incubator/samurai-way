import axios from "axios";
import {FormDataType} from "../Components/Login/Login";


const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        withCredentials: true,
    }
)

export const AuthAPI = {

    getUser() {
        const promise = instance.get<AuthInitializationStateType>(
            `/auth/me`)
        return promise
    },

    createLogin(formData: FormDataType) {
        const promise = instance.post<AuthInitializationStateType>(
            `/auth/login`, formData
        )
        return promise
    },
    logout() {
        return instance.delete<AuthInitializationStateType>(`/auth/login`)
    },
    getCaptcha(){
        const promise = instance.get(
            `/security/get-captcha-url`)
        return promise
    }
}


export type AuthInitializationStateType = {
    data: AuthDataType
    resultCode: number
    messages: Array<string>
    isAuth: boolean
    loading: boolean
    captchaUrl:string|null

}

export type AuthDataType = {
    id: string
    email: string
    login: string
}


