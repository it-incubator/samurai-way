import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store, StoreType} from "./Redux/redux-store";
import {Provider} from "react-redux";






export const rerenderEntireTree = (state:StoreType)=> {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  />
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState())


store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})




