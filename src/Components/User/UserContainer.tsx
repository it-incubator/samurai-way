import React, {useState} from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    ADDUsersAC,
    CurrentPageAC, DisabledAC, DisableType,
    FollowAC,
    ToglleIsFetchingAC,
    TotalUserCounterAC,
    UNFollowAC
} from "../../Redux/userReducer";
import {ItemsType, userAPI} from "../../API/User-api";
import axios from "axios";
import User from "./User";


export class UserWrapper extends React.Component<UsersType> {


    componentDidMount() {


        this.props.setToggleISFetching(true)
        userAPI.getUser(this.props.currentPage, this.props.pageSize)
            .then((res) => {
                this.props.setToggleISFetching(false)
                this.props.setUsers(res.data.items);
                this.props.setTotalCount(res.data.totalCount)

            })
    }


    render() {


        const ChangePage = (pageNumber: number) => {
            this.props.setToggleISFetching(true)
            this.props.setPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then((res) => {
                    this.props.setToggleISFetching(false)
                    this.props.setUsers(res.data.items)
                })
        }

        const Follow = (userId: number) => {

            this.props.setDisabled({id:userId,disableButton:true})
            userAPI.Follow(userId)

                .then((res) => {
                    this.props.Follow(userId)
                    this.props.setDisabled({id:userId,disableButton:false})

                })
        }

        const UNFollow = (userId: number) => {
            this.props.setDisabled({id:userId,disableButton:true})
            userAPI.UNFollow(userId)

                .then((res) => {
                    this.props.UNFollow(userId)
                    this.props.setDisabled({id:userId,disableButton:false})


                })
        }


        return (


            <User changePage={ChangePage}
                  currentPage={this.props.currentPage}
                  pageSize={this.props.pageSize}
                  totalUsersCounter={this.props.totalUsersCounter}
                  users={this.props.users}
                  isFetching={this.props.isFetching}
                  follow={Follow}
                  unfollow={UNFollow}
                  disable={this.props.disabled}


            />


        );
    }
}


type mapStateToPropsType = {
    users: ItemsType[]
    pageSize: number
    totalUsersCounter: number
    currentPage: number
    isFetching: boolean
    disabled:  DisableType
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {


    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCounter: state.userReducer.totalUsersCounter,
        currentPage: state.userReducer.currentPage,
        isFetching: state.userReducer.isFetching,
        disabled: state.userReducer.disable


    }
}

type mapDispatchToPropsType = {
    Follow: (id: number) => void
    UNFollow: (id: number) => void
    setUsers: (users: ItemsType[]) => void
    setPage: (p: number) => void
    setTotalCount: (totalCount: number) => void
    setToggleISFetching: (preloader: boolean) => void
    setDisabled: ( disabled:  DisableType) => void


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
        setPage: (p: number) => {
            dispatch(CurrentPageAC(p))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(TotalUserCounterAC(totalCount))
        },
        setToggleISFetching: (preloader: boolean) => {
            dispatch(ToglleIsFetchingAC(preloader))
        },
        setDisabled: ( disabled:  DisableType) => {
            dispatch(DisabledAC(disabled))
        }
    }
}


export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserWrapper)

