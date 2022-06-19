import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.scss';

type DialogPropsType = {
    id: number
    name: string
}


export const DialogItem = (props: DialogPropsType) => {
    let path = `/dialogs/${props.id}`;
    let isActive = () => {
        return props.id.toString() === path[path.length] ? `${s.link} ${s.active}` : `${s.link}`;
    }

    return (
        <div className={s.item}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="Avatar"/>
            <NavLink to={path} className={isActive}>
                {props.name}
            </NavLink>
        </div>
    );
};

