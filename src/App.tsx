import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialog/Dialogs";
import {SideBar} from "./Components/SideBar/SideBar";
import {addPost} from "./Redux/state";

type StateType = {
    State:DialogDataType

}

export type DialogDataType = {
    data:DialogTypeApp[]
    message:MessageTypeApp[]
    post:PostData[]
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

export type PostData = {
    id:number,
    message:string,
    likeCount:number
}



function App(props:StateType) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
           <Header />
            <Navbar/>
            <Route path={'/dialogs'} render={()=><Dialogs DialogData={props.State.data} MessageData={props.State.message} />}/>
           <Route path={'/profile'} render={()=><Profile  PostData={props.State.post} addPost={addPost}/>}/>
            <Route path={'/sidebar'} render={()=><SideBar SideData={props.State.sideBar}/>}/>
        </div>
        </BrowserRouter>
    );
}


export default App;
