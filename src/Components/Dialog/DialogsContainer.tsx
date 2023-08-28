import {AddPostDialogsActionCreator, InitializationStateDialogType} from "../../Redux/dialogsReducer";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
import React from "react";
import withAuthRedirect from "../Hoc/WithAuthRedirect";


type mapStateToPropsType ={
    dialogsReducer:InitializationStateDialogType
}

const mapStateToProps =(state:StoreType):mapStateToPropsType=> {
    return {
        dialogsReducer:state.dialogsReducer,


    }
}

type mapDispatchToPropsType ={
    addPost:(inputValue:string)=>void
}



const mapDispatchToProps =(dispatch:AppDispatchType):mapDispatchToPropsType=> {
    return {

        addPost:(inputValue:string)=> {
            dispatch(AddPostDialogsActionCreator(inputValue))
        },

    }
}

export type MyDialogType = mapDispatchToPropsType & mapStateToPropsType



export default compose <React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)



