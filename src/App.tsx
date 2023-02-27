import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import { Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialog/Dialogs";
import {SideBar} from "./Components/SideBar/SideBar";

import {store, StoreType} from "./Redux/redux-store";


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



function App(props:PropsType) {
console.log(props.state)
    return (

        <div className='app-wrapper'>
           <Header />
            <Navbar/>
            <Route path={'/dialogs'} render={()=><Dialogs DialogData={props.state.dialogsReducer?.data} MessageData={props.state.dialogsReducer?.message}  dispatch={store.dispatch.bind(props.state)} />}/>
           <Route path={'/profile'} render={()=><Profile  PostData={props.state.pageReducer?.post} dispatch={store.dispatch.bind(props.state)} newPostText={props.state.pageReducer?.newPostText} />}/>
            {/*<Route path={'/sidebar'} render={()=><SideBar SideData={state.sideBar}/>}/>*/}
        </div>

    );
}


export default App;
