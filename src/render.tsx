import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogDataType} from './App';
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (State:DialogDataType)=> {

    ReactDOM.render(
        <BrowserRouter>
        <App State={State} />
    </BrowserRouter>,
        document.getElementById('root')
    );

}

