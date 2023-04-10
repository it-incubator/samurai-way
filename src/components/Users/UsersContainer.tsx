import React from 'react';
import {AppRootStateType} from '../../redux/store-redux';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
    followAC,
    initialStateUsersType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from '../../redux/users-reducer';
import {Users} from './Users';

type mapStateToPropsType = initialStateUsersType;
type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (clickedPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => { //data
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
    //прокидываем в компоненту
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
        setCurrentPage: (clickedPage: number) => { //e from MUI description
            dispatch(setCurrentPageAC(clickedPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
//all props from mapState.... to component USERS ( this achieving by connect)