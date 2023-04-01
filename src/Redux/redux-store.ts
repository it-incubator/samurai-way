import {combineReducers, createStore} from "redux";
import {pageReducer} from "./pageReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./userReducer";


const reducers = combineReducers({
    dialogsReducer,
    pageReducer,
    userReducer

})

export const store = createStore(reducers)

export type StoreType = ReturnType<typeof reducers>