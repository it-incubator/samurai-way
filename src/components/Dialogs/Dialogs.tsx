import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'
import {v1} from 'uuid';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

type DialogsDataType={
    id: string
    name:string
}
type MessagesDataType={
    id: string
    message:string
}

type DialogsType={
    dialogs:DialogsDataType[]
    messages:MessagesDataType[]
}

export const Dialogs: React.FC<DialogsType>=(props) => {

    const dialogsDataMap = props.dialogs
        .map(el => <li key={el.id}><DialogItem id={el.id} name={el.name}/></li>);

    const messagesDataMap = props.messages
        .map(el => <div key={el.id}>{<Message id={el.id} message={el.message}/>}</div>);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                <ul>{dialogsDataMap}</ul>
            </div>
            <div className={c.dialogs_messages}>
                <ul>{messagesDataMap}</ul>
            </div>
        </div>
    );
}