import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/redux-store";
import {Provider} from "react-redux";
import {AppContainer} from "./App";








    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );







