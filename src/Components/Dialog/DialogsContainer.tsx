import React from 'react';
import {Dialogs} from "./Dialogs";
import {AddPostDialogsActionCreator, InitializationStateDialogType} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";;
import {StoreType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import withAuthRedirect from "../Hoc/WithAuthRedirect";
import {withRouter} from "react-router-dom";





type mapStateToPropsType ={
    dialogsReducer:InitializationStateDialogType
}

const mapStateToProps =(state:StoreType)=> {
    return {
        dialogsReducer:state.dialogsReducer,


    }
}

type mapDispatchToPropsType ={
 addPost:(inputValue:string)=>void
}

export type MyDialogType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=> {
    return {

        addPost:(inputValue:string)=> {
            dispatch(AddPostDialogsActionCreator(inputValue))
        },

    }
}




export const  DialogsContainer  = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
