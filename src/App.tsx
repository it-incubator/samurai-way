import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/News';
import {Settings} from './components/Settings/Settings';
import {StoreType} from './redux/state';
import {Sidebar} from './components/Navbar/Sidebar/Sidebar';


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state= props.store.getState()
    const store=props.store
    const dispatch=props.store.dispatch

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Sidebar sidebar={state.sideBar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch.bind(store)}/>}
                        />
                        <Route path="/profile"
                               element={<Profile profilePage={state.profilePage} dispatch={dispatch.bind(store)}/>}
                        />
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
