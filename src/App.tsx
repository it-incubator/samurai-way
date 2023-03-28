import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/News';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {SideBarContainer} from './components/Navbar/Sidebar/SideBarContainer';
import {Users} from './components/Users/Users';
import {UsersContainer} from './components/Users/UsersContainer';


type AppPropsType = {
    // state: AppRootStateType
    // dispatch: (action: ActionTypes) => void
    // store: StoreReduxType
}


const App: React.FC<AppPropsType> = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <SideBarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer />}/>
                        <Route path="/profile"
                               element={<Profile/>}
                        />
                        <Route path="/users"
                               element={<UsersContainer/>}
                        />
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    )
}

export default App;
