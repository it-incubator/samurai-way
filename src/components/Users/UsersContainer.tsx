import React from 'react';
import {AppRootStateType} from '../../redux/store-redux';
import {connect} from 'react-redux';
import {
    follow,
    initialStateUsersType, setCurrentPage, setFollowingProgress, setIsFetching, setTotalUsersCount, setUsers, unFollow,
    UserType
} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import {Loader} from '../common/loader/Loader';
import c from './Users.module.css';
import {API} from '../../api/api';

type mapStateToPropsType = initialStateUsersType;
type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (clickedPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (fetchingValue: boolean) => void
    setFollowingProgress: (fetchingValue: boolean) => void
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
        this.props.setIsFetching(true)
            API.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
            .catch(err=> {
                this.props.setIsFetching(false)
                console.log('ERROR')
            })
    }

    onPageChanged = (e: React.ChangeEvent<unknown>, clickedPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(clickedPage) //pageNumber from click in pagination
        //then get users for this page
        API.getNewPageUsers(clickedPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
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
    follow,  //передаем экшн криэйторы в UsersContainer ( оборачивает коннект)
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setFollowingProgress // это равно : () => store.dispatch(setFollowingProgress)
})(UsersContainer);
//all props from mapState.... to component UsersApiComponent ( this achieving by connect)
// !!! connect оборачивает наши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компоненте