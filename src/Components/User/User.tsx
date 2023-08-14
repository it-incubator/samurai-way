import React from 'react';
import s from "./User.module.css";
import userPhoto from "../../image/user.jpeg";
import {ItemsType} from "../../API/User-api";
import {Preloader} from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {DisableType} from "../../Redux/userReducer";



type UserType = {
    changePage: (page: number) => void
    totalUsersCounter: number
    pageSize: number
    currentPage: number
    users: ItemsType[]
    isFetching: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    disable: DisableType



}


const User: React.FC<UserType> = ({
                                      changePage, totalUsersCounter,
                                      pageSize, currentPage, users,
                                      isFetching, follow, unfollow,
                                      disable,
                                      ...props
                                  }) => {

    let pagesCount = Math.ceil(totalUsersCounter / pageSize)


    let pages = []

    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i)


    }


    const Fallow = (id: number) => {
        follow(id)

    }

    const UNFallow = (id: number) => {
        unfollow(id)


    }



    return (

        <>
            <div className={s.content}>
                <div className={s.style}>
                    <div>

                        {pages.map((p) => <span onClick={(e) => changePage(p)}

                                                className={currentPage === p ? s.current_Page : ''}>{p}</span>)

                        }

                    </div>
                    {isFetching
                        ? <Preloader/>
                        : <div>{users.map((user) => {
                                return (
                                    <>
                                        <NavLink to={`/profile/` + user.id }>
                                            <div key={user.id}>
                                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                                     className={s.users_photo}/>
                                                <div>  {user.name}</div>
                                                <div>{user.status}</div>

                                            </div>
                                        </NavLink>
                                        <div>
                                            {user.followed ?
                                                <button onClick={() => UNFallow(user.id)}
                                                        disabled={disable.id===user.id&&disable.disableButton===true}>
                                                    Follow
                                                </button> :
                                                <button onClick={() => Fallow(user.id)} disabled={disable.id===user.id&&disable.disableButton===true}>
                                                    UnFollow
                                                </button>}
                                        </div>
                                    </>


                                )

                            }
                        )}</div>}


                </div>
            </div>
        </>


    );
};

export default User;