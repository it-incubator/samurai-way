import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import { Route} from "react-router-dom";
import {store, StoreType} from "./Redux/redux-store";
import {DialogsContainer} from "./Components/Dialog/DialogsContainer";


type PropsType = {
    state:StoreType
}




export type DialogDataType = {
    data:DialogTypeApp[]
    message:MessageTypeApp[]
    profilePage:ProfilePageType
    sideBar:SideData[]
}

 export type DialogTypeApp = {
    id:number,
    name:string
}

export type SideData = {
    id:number,
    name:string
}



export type MessageTypeApp = {
    id:number,
    message:string
}

type ProfilePageType = {
    post:PostData[];
    newPostText:string

}
export type PostData = {
    id:number,
    message:string,
    likeCount:number
}



function App() {

    return (

        <div className='app-wrapper'>
           <Header />
            <Navbar/>
            <Route path={'/dialogs'} render={()=><DialogsContainer  />}/>
           <Route path={'/profile'} render={()=><Profile   />}/>
            {/*<Route path={'/sidebar'} render={()=><SideBar SideData={state.sideBar}/>}/>*/}
        </div>

    );
}


export default App;
