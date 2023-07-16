import { Dispatch } from "redux";
import { RootActionTypes } from "redux/store-redux";
import { getAuthTC } from "redux/auth-reducer";

//ACTIONS
const SET_INITIALIZED = "app/SET-INITIALIZED";
const SET_IS_LOADING = "app/SET-IS-LOADING";
export const setInitializedSuccessAC = () => ({ type: SET_INITIALIZED } as const);
export const setIsLoadingAC = (value: boolean) => ({ type: SET_IS_LOADING, value } as const);

//THUNKS
export const initializeAppTC = () => async (dispatch: Dispatch<RootActionTypes>) => {
  dispatch(setIsLoadingAC(true));
  await dispatch(getAuthTC());
  dispatch(setInitializedSuccessAC());
  dispatch(setIsLoadingAC(false));
};

//STATE
let initialState: appData = {
  isInitialized: false,
  isLoading: false,
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
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};

//TYPES
export type appData = {
  isInitialized: boolean;
  isLoading: boolean;
};
export type AppClassActionTypes =
  | ReturnType<typeof setInitializedSuccessAC>
  | ReturnType<typeof setIsLoadingAC>;
