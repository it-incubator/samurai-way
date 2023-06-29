import { Dispatch } from "redux";
import { AppActionTypes } from "redux/store-redux";
import { getAuthTC } from "redux/auth-reducer";

//ACTIONS
const SET_INITIALIZED = "SET-INITIALIZED";
export const setInitializedSuccessAC = () => {
  return { type: SET_INITIALIZED };
};

//THUNKS
export const initializeAppTC = () => async (dispatch: Dispatch<AppActionTypes>) => {
  await dispatch(getAuthTC());
  dispatch(setInitializedSuccessAC());
};

//STATE
let initialState: appData = {
  isInitialized: false,
};
export type AppInitialStateType = typeof initialState;

//REDUCER
export const appReducer = (
  state: AppInitialStateType = initialState,
  action: AppClassActionTypes
): AppInitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

//TYPES
export type appData = {
  isInitialized: boolean;
};
export type AppClassActionTypes = ReturnType<typeof setInitializedSuccessAC>;
