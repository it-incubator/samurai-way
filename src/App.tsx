import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/News';
import {Settings} from './components/Settings/Settings';


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    )
}

export default App;
