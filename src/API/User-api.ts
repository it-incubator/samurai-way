import axios from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        withCredentials: true,
    }
)

export const userAPI = {

    getUser() {
        const promise = instance.get<UserType>(
            `/users`)
        return promise
    },
    createTask(todolistId: string, title: string) {
        const promise = instance.post(
            `/users`, {title: title}
        )
        return promise
    },


    deleteTask(todolistId: string, taskId: string) {
        const promise = instance.delete(
            `/users`,
        )
        return promise
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        const promise = instance.put(
            `/users`,
            {title: title},
        )
        return promise
    },


}


export type UserType = {

    items: ItemsType[]
    totalCount: number,
    error: null

}

export type ItemsType = {

    name: string,
    id: number,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: string

}