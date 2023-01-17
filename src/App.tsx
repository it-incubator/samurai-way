import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Navbar} from "./Components/Navbar";
import {Profile} from "./Components/MAin Content/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs";


function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
           <Header />
            <Navbar/>
            <Route path={'/dialogs'} component={Dialogs}/>
           <Route path={'/profile'} component={Profile}/>
        </div>
        </BrowserRouter>
    );
}


export default App;
