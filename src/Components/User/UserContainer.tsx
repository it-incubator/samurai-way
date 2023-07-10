import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {ADDUsersAC, FollowAC, UNFollowAC} from "../../Redux/userReducer";
import {User} from "./User";
import {ItemsType} from "../../API/User-api";







type mapStateToPropsType ={
    users:ItemsType[]
}

const mapStateToProps =(state:StoreType):mapStateToPropsType=> {




    return {
     users:state.userReducer.users

    }
}

type mapDispatchToPropsType = {
    Follow:(id:number)=>void
    UNFollow:(id:number)=>void
    setUsers:(users:ItemsType[])=>void

}

export type UsersType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=> {

    return {
        Follow:(id:number)=>{
            dispatch(FollowAC(id))

        },
        UNFollow:(id:number)=>{
            dispatch(UNFollowAC(id))
    },
    setUsers :(users:ItemsType[])=> {
         dispatch(ADDUsersAC(users))
    }
}}




export const UserContainer = connect(mapStateToProps,mapDispatchToProps)(User)

