import React from 'react';
import {subscriber} from "./Redux/state";
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {State} from "./Redux/state";


export const rerenderEntireTree = ()=> {

    ReactDOM.render(
        <BrowserRouter>
            <App State={State} />
        </BrowserRouter>,
        document.getElementById('root')
    );

}

rerenderEntireTree()


subscriber(rerenderEntireTree)




