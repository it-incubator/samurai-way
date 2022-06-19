import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {addPost, stateType} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export const renderEntireTree = (props:stateType) => {
    ReactDOM.render(<BrowserRouter> <App appState={props} addPost={addPost}/>
    </BrowserRouter>, document.getElementById('root'));
}



