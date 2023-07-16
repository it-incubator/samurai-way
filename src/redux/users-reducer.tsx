import { FollowUnfollowResType, usersAPI } from "api/api";
import { Dispatch } from "redux";
import { RootActionTypes } from "./store-redux";
import { updateObjInArray } from "utils/helper/changeObjectInArrayHelper";
import { setIsLoadingAC } from "redux/app-reducer";

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
const followUnfollowFlow = async (
  userId: number,
  dispatch: Dispatch<RootActionTypes>,
  apiMethod: (userId: number) => Promise<FollowUnfollowResType>,
  actionCreator: typeof followSuccess | typeof unFollowSuccess
) => {
  dispatch(setFollowingProgress(userId, true));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) dispatch(actionCreator(userId));
  dispatch(setFollowingProgress(userId, false));
};

export const getUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch<RootActionTypes>) => {
  dispatch(setIsLoadingAC(true));
  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(setIsLoadingAC(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};
//TODO add helper for thunks refactor

export const followTC = (userId: number) => async (dispatch: Dispatch<RootActionTypes>) => {
  const apiMethod = usersAPI.followFriend.bind(usersAPI);
  await followUnfollowFlow(userId, dispatch, apiMethod, followSuccess);
};

export const unFollowTC = (userId: number) => async (dispatch: Dispatch<RootActionTypes>) => {
  const apiMethod = usersAPI.unFollowFriend.bind(usersAPI);
  await followUnfollowFlow(userId, dispatch, apiMethod, unFollowSuccess);
};

//REDUCER ======================================================================

let initialState = {
  users: [] as Array<UserType>,
  totalUsersCount: 5,
  pageSize: 5,
  currentPage: 1,
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
        users: updateObjInArray(state.users, action.userId, "id", { followed: true }),
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId, "id", { followed: false }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.clickedPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
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
    small: string | null;
    large: string | null;
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
