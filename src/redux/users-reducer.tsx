import { usersAPI } from "../api/api";
import { Dispatch } from "redux";
import { AppActionTypes } from "./store-redux";

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

//ACTION CREATORS
export const followSuccess = (userId: number) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};
export const unFollowSuccess = (userId: number) => {
  return {
    type: "UN-FOLLOW",
    userId,
  } as const;
};
export const setUsers = (users: Array<UserType>) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};
export const setCurrentPage = (clickedPage: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    clickedPage,
  } as const;
};
export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalCount,
  } as const;
};
export const setIsFetching = (fetchingValue: boolean) => {
  return {
    type: "TOGGLE-ISFETCHING",
    fetchingValue,
  } as const;
};
export const setFollowingProgress = (userId: number, fetchingValue: boolean) => {
  return {
    type: "TOGGLE-FOLLOWING-PROGRESS",
    userId,
    fetchingValue,
  } as const;
};

//THUNK CREATORS START
export const getUsersTC = (page: number, pageSize: number) => {
  return (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const followTC = (userId: number) => {
  return (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(setFollowingProgress(userId, true));
    usersAPI.followFriend(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(setFollowingProgress(userId, false));
    });
  };
};

export const unFollowTC = (userId: number) => {
  return (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(setFollowingProgress(userId, true));
    usersAPI.unFollowFriend(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollowSuccess(userId));
      }
      dispatch(setFollowingProgress(userId, false));
    });
  };
};

// THUNK CREATORS END

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
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: true } : u
        ),
      };
    case "UN-FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : u
        ),
      };
    case "SET-USERS":
      return { ...state, users: action.users };
    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.clickedPage };
    case "SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalCount };
    case "TOGGLE-ISFETCHING":
      return { ...state, isFetching: action.fetchingValue };
    case "TOGGLE-FOLLOWING-PROGRESS":
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
