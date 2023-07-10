import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {ADDUsersAC, CurrentPageAC, FollowAC, TotalUserCounterAC, UNFollowAC} from "../../Redux/userReducer";
import {User} from "./User";
import {ItemsType} from "../../API/User-api";


type mapStateToPropsType = {
    users: ItemsType[]
    pageSize: number
    totalUsersCounter: number
    currentPage :number
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {


    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCounter: state.userReducer.totalUsersCounter,
        currentPage:state.userReducer.currentPage

    }
}

type mapDispatchToPropsType = {
    Follow: (id: number) => void
    UNFollow: (id: number) => void
    setUsers: (users: ItemsType[]) => void
    setPage:(p:number)=>void
    setTotalCount:(totalCount:number)=>void

}

export type UsersType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        Follow: (id: number) => {
            dispatch(FollowAC(id))

        },
        UNFollow: (id: number) => {
            dispatch(UNFollowAC(id))
        },
        setUsers: (users: ItemsType[]) => {
            dispatch(ADDUsersAC(users))
        },
        setPage: (p:number)=> {
            dispatch(CurrentPageAC(p))
        },
        setTotalCount:(totalCount:number)=>{
            dispatch(TotalUserCounterAC(totalCount))
    }
    }
}


export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

