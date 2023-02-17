import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'
import {v1} from 'uuid';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType={
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType>=(props) => {

    const dialogsDataMap = props.dialogsPage.dialogs
        .map(el => <li key={el.id} className={c.dialog}>
            <DialogItem dialog={el}/>
        </li>);

    const messagesDataMap = props.dialogsPage.messages
        .map(el => <li key={el.id}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbrrOgLfx3xyrV6qAmKyrEimNekZcwCGKiwotVfQ&s" alt="ava" />
            {<Message message={el}/>}
        </li>);

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