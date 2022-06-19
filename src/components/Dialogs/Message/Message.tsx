import React from 'react';
import s from './Message.module.scss'

type MessagePropsType = {
    message: string
    time: string
}

export const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="avatar"/>
            <p className={s.text}>{props.message}</p>
            <p className={s.time}>{props.time}</p>
        </div>
    );
};


