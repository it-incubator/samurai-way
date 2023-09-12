import axios from "axios";
import {FormDataProfileType} from "../Components/Profile/ProfileInfo/PrifileData/FormData";


const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        withCredentials: true,
    }
)

export const profileAPI = {

    getUser(userId: string) {
        const promise = instance.get<ProfileType>(
            `/profile/${userId}`)
        return promise
    },
    getStatus(userId: string) {
        const promise = instance.get<string>(
            `/profile/status/${userId}`)
        return promise
    },
    updateStatus(status: string) {
        const promise = instance.put<StatusType>(
            `/profile/status`, {status})
        return promise
    },
    updatePhoto(photo: FormData) {
        const promise = instance.put<PhotoType>(
            `/profile/photo`, photo, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        return promise
    },
    updateProfile(formData:FormDataProfileType) {
        const promise = instance.put<StatusType>(
            `/profile/`, formData)
        return promise
    }

}


export type ProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos:
        photoType


}

type StatusType = {
    resultCode: number
    messages: string[]
    data: {}
}

type PhotoType = {
    resultCode: number
    messages: string[]
    photos: photoType
}

export type photoType = {
    small: string,
    large: string
}






