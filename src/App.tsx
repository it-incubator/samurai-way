import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Profile/>
        </div>
    );
}


export default App;
