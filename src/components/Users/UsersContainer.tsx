import React from 'react';
import {AppRootStateType} from '../../redux/store-redux';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {followAC, initialStateUsersType, setUsersAC, unFollowAC, UserType} from '../../redux/users-reducer';
import {Users} from './Users';

type mapStateToPropsType = initialStateUsersType;
type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => { //data
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {  //callbacks
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);