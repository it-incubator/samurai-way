import React, {Component} from 'react';
import s from "./User.module.css";
import {UsersType} from "./UserContainer";
import {userAPI} from "../../API/User-api";
import Viking from "../../image/iceland.jpg";


export class User extends Component<UsersType> {


    componentDidMount() {
        userAPI.getUser().then((res) => this.props.setUsers(res.data.items))
    }


    render() {


        return (


            <div className={s.content}>
                <div className={s.style}>

                    {this.props.users.map((el) =>

                        <li key={el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : Viking.small()}/>
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



