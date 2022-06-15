import React from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {stateType} from './redux/state';

type AppPropsType = {
    appState: stateType
}


const App = (props: AppPropsType) => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <div className={'content'}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsState={props.appState.dialogsState}/>}/>
                <Route path={'/profile'} render={() => <Profile postsState={props.appState.postsState}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;
