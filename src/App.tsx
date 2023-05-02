import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/News';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {SideBarContainer} from './components/Navbar/Sidebar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


export const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <SideBarContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="/users/" element={<UsersContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

