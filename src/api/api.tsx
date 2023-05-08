import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5e6ef100-8143-4a2b-9ce9-13ce8d825d16'
    }
})

export const usersAPI = {
    getUsers: function (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unFollowFriend: function (userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
    followFriend: function (userId: number) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    getProfile: function (userId: string) {
        return instance.get(`profile/${!userId? "2" : userId}`) //if no userId => to 2 user page
            .then(res => res.data)
    },
}
export const authAPI = {
    me: function () {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
}