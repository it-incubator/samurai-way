import React from 'react';
import {AppRootStateType} from '../../redux/store-redux';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
    follow,
    initialStateUsersType, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unFollow,
    UserType
} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import {Loader} from '../common/loader/Loader';
import c from './Users.module.css';

type mapStateToPropsType = initialStateUsersType;
type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (clickedPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (fetchingValue: boolean) => void
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
        // console.log('NEW DID MOUNT')
        this.props.setIsFetching(true)
        instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (e: React.ChangeEvent<unknown>, clickedPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(clickedPage) //pageNumber from click in pagination
        //then get users for this page
        instance.get(`users?page=${clickedPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            <div className={c.loader}>
                {this.props.isFetching && <Loader/>}
            </div>
            <Users onPageChanged={this.onPageChanged} //presentational component
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setUsers={this.props.setUsers}
                   isFetching={this.props.isFetching}
                   setIsFetching={this.props.setIsFetching}
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
        isFetching: state.usersPage.isFetching
    }
    //прокидываем в компоненту
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {  //callbacks
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: string) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (clickedPage: number) => { //e from MUI description
//             dispatch(setCurrentPageAC(clickedPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setIsFetching: (fetchingValue: boolean) => {
//             dispatch(setIsFetchingAC(fetchingValue))
//         },
//     }
// }


export default connect(mapStateToProps, {
    follow,  //передаем экшн криэйторы в UsersContainer ( оборачивает коннект)
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
})(UsersContainer);
//all props from mapState.... to component UsersApiComponent ( this achieving by connect)
// connect оборачивает наши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента