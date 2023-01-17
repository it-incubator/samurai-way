import s from "../Dialogs.module.css";
import React from "react";


type MessageType = {
    message:string
}

export const Message = (props:MessageType)=> {
    return (
        <div className={s.style}>
            {props.message}
        </div>
    )
}