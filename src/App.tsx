import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import { Route} from "react-router-dom";
import { StoreType} from "./Redux/redux-store";

import {HeaderContainer} from "./Components/Header/HeaderContainer";
import UserContainer from "./Components/User/UserContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {LoginContainer} from "./Components/Login/LoginContainer";
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
            <HeaderContainer/>
            <Navbar/>

            <Route path={'/dialogs'} render={()=><DialogsContainer/>}/>
           <Route path={`/profile/:userId?`} render={()=><ProfileContainer/>}/>
            <Route path={'/login'} render={()=><LoginContainer/>}/>
            <Route path={'/user'} render={()=><UserContainer/>}/>

            {/*<Route path={'/sidebar'} render={()=><SideBar />}/>*/}
        </div>

    );
}


export default App;
