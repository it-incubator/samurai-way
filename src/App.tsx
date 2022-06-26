import React from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {storeType} from './redux/state';

type AppPropsType = {
    store: storeType
}

const App = (props: AppPropsType) => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <div className={'content'}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsState={props.store.getState().dialogsPage}/>}/>
                <Route path={'/profile'} render={() => <Profile postsState={props.store.getState().profilePage.posts} addPost={props.store.addPost.bind(props.store)} newMessage={props.store.getState().profilePage.messageForNewPost} changeNewText={props.store.changeNewText.bind(props.store)}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;
