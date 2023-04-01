import React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {FollowAC, InitializationStateUserType, UNFollowAC} from "../../Redux/userReducer";





type mapStateToPropsType ={
    userReducer:InitializationStateUserType
}

const mapStateToProps =(state:StoreType):mapStateToPropsType=> {
    return {
     userReducer:state.userReducer

    }
}

type mapDispatchToPropsType = {
    Follow:(id:number)=>void
    UNFollow:(id:number)=>void

}

export type UsersType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=> {

    return {
        Follow:(id:number)=>{
            dispatch(FollowAC(id))

        },
        UNFollow:(id:number)=>{
            dispatch(UNFollowAC(id))
    }
}}




export const UserContainer = connect(mapStateToProps,mapDispatchToProps)(User)

