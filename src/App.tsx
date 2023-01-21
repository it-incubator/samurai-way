import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import { Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialog/Dialogs";
import {SideBar} from "./Components/SideBar/SideBar";
import {addPost, AddPostDialogs, ChangeText} from "./Redux/state";

export type StateType = {
    State:DialogDataType

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



function App(props:StateType) {
    return (

        <div className='app-wrapper'>
           <Header />
            <Navbar/>
            <Route path={'/dialogs'} render={()=><Dialogs DialogData={props.State.data} MessageData={props.State.message}  AddPostDialogs={AddPostDialogs} />}/>
           <Route path={'/profile'} render={()=><Profile  PostData={props.State.profilePage.post} addPost={addPost} newPostText={props.State.profilePage.newPostText} ChangeText={ChangeText}/>}/>
            <Route path={'/sidebar'} render={()=><SideBar SideData={props.State.sideBar}/>}/>
        </div>

    );
}


export default App;
