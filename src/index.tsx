import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {state} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(<BrowserRouter> <App appState={state}/> </BrowserRouter>, document.getElementById('root'));