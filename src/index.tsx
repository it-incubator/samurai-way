import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Store} from "./Redux/state";


export const rerenderEntireTree = ()=> {

    ReactDOM.render(
        <BrowserRouter>
            <App Store={Store} />
        </BrowserRouter>,
        document.getElementById('root')
    );

}

rerenderEntireTree()


Store.subscriber(rerenderEntireTree)




