import React from 'react';
import {UsersPropsType} from './UsersContainer';
import c from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.png'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5e6ef100-8143-4a2b-9ce9-13ce8d825d16'
    }
})

export class Users extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) {
    //     super(props)
    // }
    // тк наш конструктор делегирует конструирование родительскому конструктору,
    //     // прокидывание пропсов происходит автоматически
    //     // extends -  расширяет родителя и наследуют все методы родителя
    componentDidMount() {
        // console.log('NEW DID MOUNT')
        instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (e: React.ChangeEvent<unknown>, clickedPage: number) => {
        this.props.setCurrentPage(clickedPage) //pageNumber from click in pagination
        //then get users for this page
        instance.get(`users?page=${clickedPage}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        return (
            <div className={c.usersPageWrapper}>
                <div className={c.pagination}>
                    <Pagination count={pagesCount > 0 ? pagesCount : this.props.currentPage}
                                variant="outlined"
                                color="secondary"
                                showFirstButton={true}
                                showLastButton={true}
                                onChange={this.onPageChanged}
                    />
                </div>
                {
                    this.props.users.map(u => <div key={u.id} className={c.userWrapper}>
                            <div className={c.userLogoWrapper}>
                                <div className={c.userLogo}>
                                    <img src={u.photos.small ? u.photos.small : userPhoto}
                                         alt="ava" className={c.userPhoto}/>
                                </div>
                                <div className={c.buttonWrapper}>
                                    {u.followed
                                        ? <button onClick={() => this.props.unFollow(u.id)}>UnFollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                                    }
                                </div>
                            </div>

                            <div className={c.userInfoWrapper}>
                                <div className={c.nameStatusWrap}>
                                    <div className={c.fullName}>{u.name}</div>
                                    <div className={c.status}>{u.status}</div>
                                </div>
                                <div className={c.locationWrap}>
                                    <div className={c.country}>{'u.location.country'}</div>
                                    <div className={c.city}>{'u.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}