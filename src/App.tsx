import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialog/Dialogs";


export type DialogDataType = {
    DialogData:DialogTypeApp[]
    MessageData:MessageTypeApp[]
    PostData:PostData[]
}

 export type DialogTypeApp = {
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



function App(props:DialogDataType,) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
           <Header />
            <Navbar/>
            <Route path={'/dialogs'} render={()=><Dialogs DialogData={props.DialogData} MessageData={props.MessageData} />}/>
           <Route path={'/profile'} render={()=><Profile PostData={props.PostData}/>}/>
        </div>
        </BrowserRouter>
    );
}


export default App;
