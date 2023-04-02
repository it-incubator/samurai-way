import React from "react";
import style from './sitebar.module.css'
import {DialogsDataType} from "../../redux/state";
import {FriendItem} from "./friendItem/friendItem";

type SitebarPropsType = {
    friends: DialogsDataType[]
}

export const Sitebar: React.FC<SitebarPropsType> = ({friends}) => {

    const friendsItemRender = friends.slice(0, 3).map(item => <FriendItem key={item.id} name={item.name}/>)

    return(
        <div className={style.wrapper}>
            <h2 className={style.title}>Friends</h2>
            <div className={style.items}>
                {friendsItemRender}
            </div>
        </div>

    )
}