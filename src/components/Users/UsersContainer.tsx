import React from 'react';
import {AppRootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';
import {
    follow, getUsers, initialStateUsersType, setCurrentPage, unFollow
} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import {Loader} from '../common/loader/Loader';
import c from './Users.module.css';

type mapStateToPropsType = initialStateUsersType;
type mapDispatchToPropsType = {
    setCurrentPage: (clickedPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number)=> void
    unFollow: (userId: number)=> void
}
export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5e6ef100-8143-4a2b-9ce9-13ce8d825d16'
    }
})

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (e: React.ChangeEvent<unknown>, clickedPage: number) => {
        this.props.getUsers(clickedPage, this.props.pageSize);
    }

    render() {
        return <>
            <div className={c.loader}>
                {this.props.isFetching && <Loader/>}
            </div>
            <Users {...this.props}
                   onPageChanged={this.onPageChanged} //presentational component
            />
        </>
    }
}

//component for server requests

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => { //data
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
    //прокидываем в компоненту
}


export default connect(mapStateToProps, {
    setCurrentPage, // это равно : () => store.dispatch(setFollowingProgress)
    getUsers, follow, unFollow //thunkCreator
})(UsersContainer);
//все пропсы  из mapState.... в компоненту UsersContainer ( с помощью коннекта)
// !!! connect оборачивает наши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компоненте