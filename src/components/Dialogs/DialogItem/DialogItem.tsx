import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.scss';

type DialogPropsType = {
    id: number
    name: string
}


export const DialogItem = (props: DialogPropsType) => {
    let path = `/dialogs/${props.id}`;
    return (
        <NavLink to={path} className={`${s.item} ${s.active}`}>
            {props.name}
        </NavLink>
    );
};

