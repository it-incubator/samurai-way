import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.png'
import Pagination from '@mui/material/Pagination';
import {instance, UsersContainerPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';
import {API} from '../../api/api';


type UsersPropsType = UsersContainerPropsType & {
    onPageChanged: (e: React.ChangeEvent<unknown>, clickedPage: number)=> void
}


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    //округляем количество страниц в большую сторону , чтобы отображать всех юзеров

    return (
        <div className={c.usersPageWrapper}>
            <div className={c.pagination}>
                <Pagination count={pagesCount > 0 ? pagesCount : props.currentPage}
                            variant="outlined"
                            color="secondary"
                            showFirstButton={true}
                            showLastButton={true}
                            onChange={props.onPageChanged}
                />
            </div>
            {
                props.users.map(u => <div key={u.id} className={c.userWrapper}>
                        <div className={c.userLogoWrapper}>
                            <div className={c.userLogo}>
                                <NavLink to={'/profile/'+ u.id}>
                                <img src={u.photos.small ? u.photos.small : userPhoto}
                                     alt="ava" className={c.userPhoto}/>
                                </NavLink>
                            </div>
                            <div className={c.buttonWrapper}>
                                {u.followed
                                    ? <button disabled={props.followingProgress} onClick={() => {
                                        props.setFollowingProgress(true)
                                        API.unFollowFriend(u.id)
                                            .then(data => {
                                                if (data.resultCode===0) {
                                                    props.unFollow(u.id)
                                                }
                                                props.setFollowingProgress(false)
                                            })
                                    }
                                    }>UnFollow</button>
                                    : <button disabled={props.followingProgress} onClick={() => {
                                        props.setFollowingProgress(true)
                                        API.followFriend(u.id)
                                            .then(data => {
                                                if (data.resultCode===0) {
                                                    props.follow(u.id)
                                                }
                                                props.setFollowingProgress(false)
                                            })
                                    }
                                    }>Follow</button>
                                }
                            </div>
                        </div>

                        <div className={c.userInfoWrapper}>
                            <div className={c.nameStatusWrap}>
                                <div className={c.fullName}>{u.name}</div>
                                <div className={c.status}>{u.status}</div>
                            </div>
                            <div className={c.locationWrap}>
                                <div className={c.country}>{'User country'}</div>
                                <div className={c.city}>{'User city'}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}