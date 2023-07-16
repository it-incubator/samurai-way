import { Dispatch } from "redux";
import { RootActionTypes } from "./store-redux";
import { authAPI } from "api/api";
import { stopSubmit } from "redux-form";

//ACTIONS ================================================================================
const SET_USER_DATA = "auth/SET-USER-DATA";
export const setAuthUserData = (data: AuthData) =>
  ({
    type: SET_USER_DATA,
    data,
  } as const);

//THUNKS  ================================================================================
export const getAuthTC = () => async (dispatch: Dispatch<RootActionTypes>) => {
  const response = await authAPI.me();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData({ ...response.data, isAuth: true }));
  }
};

export const loginUserTC =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: Dispatch<RootActionTypes>) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getAuthTC());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
export const logoutUserTC = () => async (dispatch: Dispatch<RootActionTypes>) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(
      setAuthUserData({
        ...data.data,
        id: null,
        email: null,
        login: null,
        isAuth: false,
      })
    );
  }
};

//STATE ================================================================================
let initialState: AuthData = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};
export type initialStateUserDataType = typeof initialState;

//REDUCER ================================================================================
export const authReducer = (
  state: initialStateUserDataType = initialState,
  action: AuthActionTypes
): initialStateUserDataType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

//TYPES ================================================================================
export type AuthData = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
export type AuthActionTypes = ReturnType<typeof setAuthUserData>;
