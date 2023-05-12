import {applyMiddleware, combineReducers, createStore} from 'redux';
import {UsersActionTypes, usersReducer} from './users-reducer';
import {ProfileActionTypes, profileReducer} from './profile-reducer';
import {DialogsActionTypes, dialogsReducer} from './dialogs-reducer';
import {SideBarActionTypes, sidebarReducer} from './sidebar-reducer';
import {AuthActionTypes, authReducer} from './auth-reducer';
import thunkMiddleware  from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


export type AppRootStateType = ReturnType<typeof rootReducer>
//Type of new State (redux) , type of what rootReducer returns (it returns State)
export type StoreReduxType=typeof store

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootState = ReturnType<typeof store.getState>
export type AppActionTypes = UsersActionTypes
    | AuthActionTypes
    | DialogsActionTypes
    | ProfileActionTypes
    | SideBarActionTypes
// @ts-ignore
window.store = store
