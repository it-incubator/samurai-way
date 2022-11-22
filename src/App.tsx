import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Navbar} from "./Components/Navbar";
import {Profile} from "./Components/MAin Content/Profile";


function App(props:any) {
    return (
        <div className='app-wrapper'>
           <Header />
            <Navbar/>
            <Profile/>

        </div>
    );
}


export default App;
