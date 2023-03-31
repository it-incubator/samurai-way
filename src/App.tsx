import {BrowserRouter, Route} from "react-router-dom"

import './App.css'

import {Content} from './components/profile/Profile'
import {Header} from './components/header/Header'
import {Navigation} from './components/navigation/Navigation'
import {Dialogs} from './components/dialogs/Dialogs'
import {Music} from "./components/music/Music"
import {News} from "./components/news/News"
import {Setting} from "./components/setting/Setting"

import {onChangeDialogsInput, onChangePostsInput, onClickHandler, StateType} from "./redux/state"

type AppPropsType = {
    state: StateType
    onClickCallBack: (value: string, path: string) => void
    onChangeDialogsInput: (value: string) => void
    onChangePostsInput: (value: string) => void
    dialogsInputState: string
}


const App = (props: AppPropsType) => {
    const {state: {dialogsPage, dialogsPage: {dialogsData, dialogsInputState}, propfilePage: {myPostsData, profileInputState}}} = props

    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Navigation friends={dialogsData}/>
                <div className='content'>
                    <Route render={() => <Dialogs dialogsPage={dialogsPage} onClickCallBack={onClickHandler} onChangeInput={onChangeDialogsInput}/>} path={'/dialogs'}/>
                    <Route render={() => <Content myPostsData={myPostsData} onClickCallBack={onClickHandler} onChangeInput={onChangePostsInput} stateTextAreaValue={profileInputState}/>}  path={'/profile'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Setting} path={'/setting'}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
