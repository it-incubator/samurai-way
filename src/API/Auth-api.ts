import axios from "axios";


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

    createLogin(email:string,login:string) {
        const promise = instance.post(
            `/auth/login`, {email:email,login:login}
        )
        return promise
    },

}




export type AuthInitializationStateType = {
    data: AuthDataType
    resultCode: number
    messages: Array<string>

}

type AuthDataType = {
    id: number
    email: string
    login: string
}


