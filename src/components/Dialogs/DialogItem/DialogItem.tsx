import React from 'react';
import c from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom'
import {v1} from 'uuid';

type DialogsDataType={
    id: string
    name:string
}

export const DialogItem: React.FC<DialogsDataType> = (props) => {
    return (
        <div className={c.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}