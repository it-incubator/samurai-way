import { AppRootStateType } from "redux/store-redux";
import { createSelector } from "reselect";

export const getUsers = (state: AppRootStateType) => {
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});

export const getTotalUsersCount = (state: AppRootStateType) => {
  return state.usersPage.totalUsersCount;
};
export const getPageSize = (state: AppRootStateType) => {
  return state.usersPage.pageSize;
};
export const getCurrentPage = (state: AppRootStateType) => {
  return state.usersPage.currentPage;
};
export const getFollowingProgress = (state: AppRootStateType) => {
  return state.usersPage.followingProgress;
};
