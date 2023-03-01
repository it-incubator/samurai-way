import React from 'react';
import {DialogTypeApp,MessageTypeApp} from "../../App";
import {Dialogs} from "./Dialogs";
import {AddPostDialogs, AddPostDialogsActionCreator} from "../../Redux/dialogsReducer";

type DialogsType = {
    DialogData?:DialogTypeApp[]
    MessageData?:MessageTypeApp[]
    dispatch:(action:AddPostDialogs)=>void

}

export  const DialogsContainer = (props:DialogsType) => {




    const AddPost = (inputValue:string)=> {

        props.dispatch(AddPostDialogsActionCreator(inputValue))

    }


    return ( <div>

            <Dialogs  addPost={AddPost}
                      DialogData={props.DialogData}
                      MessageData={props.MessageData}
                       />

        </div>

    );
};
