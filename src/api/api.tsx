import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5e6ef100-8143-4a2b-9ce9-13ce8d825d16",
  },
});

export type FollowUnfollowResType = {
  data: Object;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
};

export const usersAPI = {
  getUsers: function (currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data);
  },
  unFollowFriend: function (userId: number) {
    return instance.delete<FollowUnfollowResType>(`follow/${userId}`).then((res) => res.data);
  },
  followFriend: function (userId: number) {
    return instance.post<FollowUnfollowResType>(`follow/${userId}`).then((res) => res.data);
  },
};
export const authAPI = {
  me: function () {
    return instance.get(`auth/me`).then((res) => res.data);
  },
  login: function (email: string, password: string, rememberMe: boolean) {
    return instance
      .post(`auth/login`, {
        email: email,
        password: password,
        rememberMe: rememberMe,
      })
      .then((res) => res.data);
  },
  logout: function () {
    return instance.delete(`auth/login`).then((res) => res.data);
  },
};

export const profileAPI = {
  getProfile: function (userId: number) {
    return instance
      .get(`profile/${!userId ? "2" : userId}`) //if no userId => to 2 user page
      .then((res) => res.data);
  },
  getStatus: function (userId: number) {
    return instance.get(`profile/status/${!userId ? "2" : userId}`).then((res) => res.data);
  },
  setStatus: function (status: string) {
    return instance
      .put("profile/status", { status: status }) //max length 300
      .then((res) => res.data);
  },
};
