import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import { Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialog/Dialogs";
import {SideBar} from "./Components/SideBar/SideBar";
import {StoreType} from "./Redux/state";


type PropsType = {
    Store:StoreType
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



function App(props:PropsType) {
    const state =props.Store.getState()
    return (

        <div className='app-wrapper'>
           <Header />
            <Navbar/>
            <Route path={'/dialogs'} render={()=><Dialogs DialogData={state.data} MessageData={state.message}  dispatch={props.Store.dispatch.bind(props.Store)} />}/>
           <Route path={'/profile'} render={()=><Profile  PostData={state.profilePage.post} dispatch={props.Store.dispatch.bind(props.Store)} newPostText={state.profilePage.newPostText} />}/>
            <Route path={'/sidebar'} render={()=><SideBar SideData={state.sideBar}/>}/>
        </div>

    );
}


export default App;
