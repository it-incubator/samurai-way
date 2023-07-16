import { usersAPI } from "api/api";
import { Dispatch } from "redux";
import { RootActionTypes } from "./store-redux";

//ACTIONS ======================================================================

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_ISFETCHING = "TOGGLE-ISFETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

export const followSuccess = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unFollowSuccess = (userId: number) => ({ type: UN_FOLLOW, userId } as const);
export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);
export const setCurrentPage = (clickedPage: number) => ({ type: SET_CURRENT_PAGE, clickedPage } as const);
export const setTotalUsersCount = (totalCount: number) =>
  ({ type: SET_TOTAL_USERS_COUNT, totalCount } as const);
export const setIsFetching = (fetchingValue: boolean) =>
  ({ type: TOGGLE_ISFETCHING, fetchingValue } as const);
export const setFollowingProgress = (userId: number, fetchingValue: boolean) =>
  ({ type: TOGGLE_FOLLOWING_PROGRESS, userId, fetchingValue } as const);

//THUNKS ======================================================================

export const getUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch<RootActionTypes>) => {
  dispatch(setIsFetching(true));
  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export const followTC = (userId: number) => async (dispatch: Dispatch<RootActionTypes>) => {
  dispatch(setFollowingProgress(userId, true));
  const data = await usersAPI.followFriend(userId);
  if (data.resultCode === 0) dispatch(followSuccess(userId));
  dispatch(setFollowingProgress(userId, false));
};

export const unFollowTC = (userId: number) => async (dispatch: Dispatch<RootActionTypes>) => {
  dispatch(setFollowingProgress(userId, true));
  const data = await usersAPI.unFollowFriend(userId);
  if (data.resultCode === 0) dispatch(unFollowSuccess(userId));
  dispatch(setFollowingProgress(userId, false));
};

//REDUCER ======================================================================

let initialState = {
  users: [] as Array<UserType>,
  totalUsersCount: 5,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
  followingProgress: [] as Array<Number>,
};
export type initialStateUsersType = typeof initialState;

export const usersReducer = (
  state: initialStateUsersType = initialState,
  action: UsersActionTypes
): initialStateUsersType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)),
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.clickedPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case TOGGLE_ISFETCHING:
      return { ...state, isFetching: action.fetchingValue };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.fetchingValue
          ? [...state.followingProgress, action.userId] // while request add id to array
          : state.followingProgress.filter((id) => id !== action.userId), // if request ended filter
      };
    default:
      return state;
  }
};

//TYPES ======================================================================

export type UserType = {
  id: number;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
  name: string;
  status: string;
};

export type UsersActionTypes =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unFollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof setFollowingProgress>;
