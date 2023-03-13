import React, {ChangeEvent, useRef} from 'react';
import c from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionTypes, addMessageAC, DialogsPageType, updateMessageAC} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionTypes)=> void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialPg=props.dialogsPage

    const dialogsDataMap = dialPg.dialogs
        .map(el => <li key={el.id} className={c.dialog}>
            <DialogItem dialog={el}/>
        </li>);

    const messagesDataMap = dialPg.messages
        .map(el => <li key={el.id}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbrrOgLfx3xyrV6qAmKyrEimNekZcwCGKiwotVfQ&s"
                 alt="ava"/>
            {<Message message={el}/>}
        </li>);

    const addMessage = () => {
        // .dispatch( {} )  action == Object
        props.dispatch(addMessageAC(dialPg.newMessageText))
        props.dispatch(updateMessageAC('')) //textarea clean
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageAC(e.currentTarget.value))
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                <ul>{dialogsDataMap}</ul>
            </div>
            <div className={c.dialogs_messages}>
                <ul>{messagesDataMap}</ul>
                <div className={c.dialogs_AddPostWrapper}>
                    <textarea className={c.dialogs_form}
                              onChange={onMessageChange}
                              value={dialPg.newMessageText}
                    ></textarea>
                    <button className={c.dialogs_button}
                            onClick={addMessage}
                            disabled={dialPg.newMessageText===''}
                    >Sent Message
                    </button>
                </div>
            </div>
        </div>
    );
}