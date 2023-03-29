import {combineReducers, createStore} from "redux";
import {pageReducer} from "./pageReducer";
import {dialogsReducer} from "./dialogsReducer";


const reducers = combineReducers({
    dialogsReducer,
    pageReducer

})

export const store = createStore(reducers)

export type StoreType = ReturnType<typeof reducers>