import { applyMiddleware, combineReducers, createStore } from "redux";
import { UsersActionTypes, usersReducer } from "./users-reducer";
import { ProfileActionTypes, profileReducer } from "./profile-reducer";
import { DialogsActionTypes, dialogsReducer } from "./dialogs-reducer";
import { SideBarActionTypes, sidebarReducer } from "./sidebar-reducer";
import { AuthActionTypes, authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { AppClassActionTypes, appReducer } from "redux/app-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type StoreReduxType = typeof store;

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootState = ReturnType<typeof store.getState>;
export type RootActionTypes =
  | UsersActionTypes
  | AuthActionTypes
  | DialogsActionTypes
  | ProfileActionTypes
  | SideBarActionTypes
  | AppClassActionTypes;

// @ts-ignore
window.store = store;
