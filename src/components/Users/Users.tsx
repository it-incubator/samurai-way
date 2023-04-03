import React from 'react';
import {UsersPropsType} from './UsersContainer';
import c from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.png'
import axios from 'axios';

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
        console.log('NEW DID MOUNT')
        instance.get('users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div className={c.usersPageWrapper}>
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