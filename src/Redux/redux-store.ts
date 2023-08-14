import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {pageReducer} from "./pageReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';



const reducers = combineReducers({
    dialogsReducer,
    pageReducer,
    userReducer,
    authReducer,
    form:formReducer


})

export const store = createStore(reducers,applyMiddleware(thunk))

export type StoreType = ReturnType<typeof reducers>



export type AppDispatchType = ThunkDispatch<StoreType, any, AnyAction>

