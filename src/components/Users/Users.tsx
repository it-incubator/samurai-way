import React from 'react';
import {UsersPropsType} from './UsersContainer';
import c from './Users.module.css';
import {v1} from 'uuid';

export const Users = (props: UsersPropsType) => {
    const userAva= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtwg-rhAwzjFo4QCCnMee3Y_fdi9ETH16ag&usqp=CAU"
    if (props.users.length===0) {
        props.setUsers([
            {id: v1(), photoUrl: userAva,followed: true, fullName: 'Dmitry K', status: 'Searching job', location: {country: 'Russia', city: 'Perm'} },
            {id: v1(), photoUrl: userAva,followed: false, fullName: 'Aleks L', status: 'Looking for sport', location: {country: 'Russia', city: 'Moscow'} },
            {id: v1(), photoUrl: userAva,followed: false, fullName: 'Kolya T', status: 'I am GRUT', location: {country: 'Russia', city: 'Ekaterinburg'} },
            {id: v1(), photoUrl: userAva,followed: true, fullName: 'Artem P', status: 'Good day!', location: {country: 'Russia', city: 'Sankt-Petersburg'} }
            ]
        )
    }

    const usersDataMap = props.users.map(u => <div key={u.id} className={c.userWrapper}>
        <div className={c.userLogoWrapper}>
            <div className={c.userLogo}>
                <img src={u.photoUrl}
                     alt="ava" className={c.userPhoto}/>
            </div>
            <div className={c.buttonWrapper}>
                {u.followed
                    ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                    : <button onClick={() => props.follow(u.id)}>Follow</button>
                }
            </div>
        </div>

        <div className={c.userInfoWrapper}>
            <div className={c.nameStatusWrap}>
                <div className={c.fullName}>{u.fullName}</div>
                <div className={c.status}>{u.status}</div>
            </div>
            <div className={c.locationWrap}>
                <div className={c.country}>{u.location.country}</div>
                <div className={c.city}>{u.location.city}</div>
            </div>
        </div>

    </div>)

    return (
        <div className={c.usersPageWrapper}>
            {usersDataMap}
        </div>
    )
}