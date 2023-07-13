import React from 'react';
import s from "./User.module.css";
import user from "../../image/user.jpeg";
import {ItemsType} from "../../API/User-api";
import {Preloader} from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";


type UserType = {
    changePage: (p: number) => void
    totalUsersCounter: number
    pageSize: number
    currentPage: number
    users: ItemsType[]
    isFetching: boolean
}


const User: React.FC<UserType> = ({
                                      changePage, totalUsersCounter,
                                      pageSize, currentPage, users,
                                      isFetching, ...props
                                  }) => {

    let pagesCount = Math.ceil(totalUsersCounter / pageSize)


    let pages = []

    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i)

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
                        : <div>{users.map((el) => {
                                return (
                                    <>
                                        <NavLink to={`/profile/` + el.id}>
                                            <div key={el.id}>
                                                <img src={el.photos.small !== null ? el.photos.small : user}
                                                     className={s.users_photo}/>
                                                <div>  {el.name}</div>
                                            </div>
                                        </NavLink>
                                        <div>
                                            {el.followed ? <button>
                                                    Follow
                                                </button> :
                                                <button>
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