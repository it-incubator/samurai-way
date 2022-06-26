import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/state';

const renderEntireTree = () => {
    ReactDOM.render(<BrowserRouter>
        <App store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree()

store.subscribe(renderEntireTree)