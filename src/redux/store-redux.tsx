import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import {usersReducer} from './users-reducer';


export type AppRootStateType = ReturnType<typeof rootReducer>
//Type of new State (redux) , type of what rootReducer returns (it returns State)
export type StoreReduxType=typeof store

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
})

export const store = createStore(rootReducer)