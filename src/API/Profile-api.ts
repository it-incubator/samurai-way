import axios from "axios";


const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        withCredentials: true,
    }
)

export const profileAPI = {

    getUser(userId:string) {
        const promise = instance.get<ProfileType>(
            `/profile/${userId}`)
        return promise
    },
    getStatus(userId:string) {
        const promise = instance.get<string>(
            `/profile/status/${userId}`)
        return promise
    },
    updateStatus(status:string){
        const promise = instance.put<StatusType>(
            `/profile/status`,{status})
        return promise
    }
}


export type ProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: {small:string,large: string}
    small: string

}

type StatusType = {
    resultCode: number
    messages: string
    data: {}
}

