import React from 'react';
import {connect} from "react-redux";
import {AppDispatchType, StoreType,} from "../../Redux/redux-store";

import {
    DisableType,
    ThunkChangePage, ThunkFollow, ThunkUNFollow, ThunkUser,

} from "../../Redux/userReducer";
import {ItemsType} from "../../API/User-api";
import User from "./User";


export class UserWrapper extends React.Component<UsersType> {


    componentDidMount() {

        this.props.GetUser(this.props.currentPage, this.props.pageSize)

    }


    render() {


        const ChangePage = (p: number) => {

            this.props.ChangePageUser(p, this.props.pageSize)
        }

        const Follow = (userId: number) => {

            this.props.Follow(userId)
        }

        const UNFollow = (userId: number) => {

            this.props.UNFollow(userId)

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
                  isAuth ={this.props.isAuth }


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
    disabled: DisableType
    isAuth :string
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {


    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCounter: state.userReducer.totalUsersCounter,
        currentPage: state.userReducer.currentPage,
        isFetching: state.userReducer.isFetching,
        disabled: state.userReducer.disable,
        isAuth :state.authReducer.data.login

    }
}

type mapDispatchToPropsType = {
    Follow: (id: number) => void
    UNFollow: (id: number) => void
    GetUser: (p: number, pageSize: number) => void
    ChangePageUser: (currentPage: number, pageSize: number) => void


}

export type UsersType = mapDispatchToPropsType & mapStateToPropsType


const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {


    return {
        Follow: (id: number) => {
            dispatch(ThunkFollow(id))

        },
        UNFollow: (id: number) => {
            dispatch(ThunkUNFollow(id))
        },

        GetUser: (p: number, pageSize: number) => {
            dispatch(ThunkUser(p, pageSize))
        },
        ChangePageUser: (pageNumber: number, pageSize: number) => {
            dispatch(ThunkChangePage(pageNumber, pageSize))
        }
    }
}


export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserWrapper)

