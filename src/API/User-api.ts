import axios, {AxiosResponse} from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        withCredentials: true,
    }
)

export const userAPI = {

    getUser(currentPage:number,pageSize:number) {
        const promise = instance.get<UserType>(
            `/users?page=${currentPage}&count=${pageSize}`)
        return promise
    },

    getChangePageUser(p:number,pageSize:number) {
        const promise = instance.get<UserType>(
            `/users?page=${p}&count=${pageSize}`)
        return promise
    },



    Follow(userId:number) {
        const promise = instance.post<{}, AxiosResponse, {userId: number}>(
            `/follow/${userId}`,{userId}
        )
        return promise
    },

    UNFollow(userId:number) {
        const promise = instance.delete(
            `/follow/${userId}`,
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
    status: string,
    followed: boolean



}


