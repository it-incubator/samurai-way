import { v1 } from "uuid";
import { getProfileResponseType } from "components/Profile/ProfileContainer";
import { Dispatch } from "redux";
import { RootActionTypes } from "./store-redux";
import { profileAPI } from "api/api";
import { setFollowingProgress } from "./users-reducer";

//ACTION CREATORS ======================================================================
const ADD_POST = "profile/ADD-POST";
const DELETE_POST = "profile/DELETE-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_USER_STATUS = "profile/SET-USER-STATUS";
const UPDATE_USER_STATUS = "profile/UPDATE-USER-STATUS";

export const addPost = (postText: string) => ({ type: ADD_POST, newPost: postText } as const);

export const deletePost = (postId: string) => ({ type: DELETE_POST, postId } as const);
export const setUserProfile = (profileValue: getProfileResponseType) =>
  ({ type: SET_USER_PROFILE, profileValue } as const);
export const setUserStatus = (status: string) => ({ type: SET_USER_STATUS, status } as const);
export const updateUserStatus = (status: string) => ({ type: UPDATE_USER_STATUS, status } as const);

//THUNK CREATORS ======================================================================
export const getProfileTC = (userId: number) => async (dispatch: Dispatch<RootActionTypes>) => {
  dispatch(setFollowingProgress(+userId, true));
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getUserStatusTC = (userId: number) => async (dispatch: Dispatch<RootActionTypes>) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};
export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch<RootActionTypes>) => {
  const data = await profileAPI.setStatus(status);
  if (data.resultCode === 0) {
    dispatch(updateUserStatus(status));
  }
};

//STATE ======================================================================

let initialState = {
  posts: [
    { id: v1(), message: "Hi, how are you?", likes: 15 },
    { id: v1(), message: "Hi, im fine thank you, and you?", likes: 10 },
  ] as Array<PostType>,
  profile: null,
  status: "",
};

//REDUCER ======================================================================
export const profileReducer = (
  state: initialStateProfileType = initialState,
  action: ProfileActionTypes
): initialStateProfileType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: v1(), message: action.newPost, likes: 0 }],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profileValue };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case UPDATE_USER_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

//TYPES ======================================================================

export type ProfileActionTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserStatus>
  | ReturnType<typeof updateUserStatus>
  | ReturnType<typeof deletePost>;

export type PostType = {
  id: string;
  message: string;
  likes: number;
};
export type initialStateProfileType = {
  posts: PostType[];
  profile: getProfileResponseType;
  status: string;
};
