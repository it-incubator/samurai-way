import './App.css'
import {Content} from './components/profile/Profile'
import {Header} from './components/header/Header'
import {Navigation} from './components/navigation/Navigation'
import {Dialogs} from './components/dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Setting} from "./components/setting/Setting";

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Navigation/>
                <div className='content'>
                    <Route component={Dialogs} path={'/dialogs'}/>
                    <Route component={Content} path={'/profile'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Setting} path={'/setting'}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
