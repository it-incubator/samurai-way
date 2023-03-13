import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    store,
    RootStateType
} from './redux/state';



let rerenderEntireTree = (props: RootStateType) => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    )
}
rerenderEntireTree(store.getState());
store.subscribe(()=>rerenderEntireTree(store.getState()));