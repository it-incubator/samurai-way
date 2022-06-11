import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem/DialogItem';
import {Message} from './DialogItem/Message/Message';
import {DialogsStateType} from '../../redux/state';


type DialogsPropsType = {
    dialogsState: DialogsStateType
}


export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsState.names
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.dialogsState.messages
        .map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

