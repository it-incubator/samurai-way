import React from "react";
import style from "../sitebar.module.css";

type FriendItemPropsType = {
    name: string
}

export const FriendItem: React.FC<FriendItemPropsType> = ({name}) => {
    return(
        <div className={style.item}>
            <div className={style.avatar}></div>
            <h4 className={style.friendName}>{name}</h4>
        </div>
    )
}