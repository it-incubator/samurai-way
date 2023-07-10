import React from 'react';
import s from "./User.module.css";
import {UsersType} from "./UserContainer";
import user from "../../image/user.jpeg";
import axios from "axios";


export class User extends React.Component<UsersType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items);
            this.props.setTotalCount(res.data.totalCount)})
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCounter / this.props.pageSize)


        let pages = []

        for (let i = 1; i <= pagesCount; i++) {

            pages.push(i)

        }

      const  ChangePage = (pageNumber: number) => {
            this.props.setPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then((res) => this.props.setUsers(res.data.items))

        }


        return (


            <div className={s.content}>
                <div className={s.style}>
                    <div>

                        {pages.map((p) => <span onClick={(e) => ChangePage(p)}
                                                className={this.props.currentPage === p ? s.current_Page : ''}>{p}</span>)
                        }

                    </div>

                    {this.props.users.map((el) =>

                        <li key={el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : user} className={s.users_photo}/>
                            {el.name}
                            <div>
                                {el.followed ? <button>
                                        Follow
                                    </button> :
                                    <button>
                                        UnFollow
                                    </button>}
                            </div>
                        </li>
                    )}

                </div>
            </div>


        );
    }
}



