import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';

 const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsDataMap = props.dialogs
        .map(el => <li key={el.id} className={c.dialog}>
            <DialogItem dialog={el}/>
        </li>);

    const messagesDataMap = props.messages
        .map(el => <li key={el.id}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbrrOgLfx3xyrV6qAmKyrEimNekZcwCGKiwotVfQ&s"
                 alt="ava"/>
            {<Message message={el}/>}
        </li>);

    const onAddMessage = () => {
        props.addMessage(props.newMessageText)
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
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
                              value={props.newMessageText}
                    ></textarea>
                    <button className={c.dialogs_button}
                            onClick={onAddMessage}
                            disabled={props.newMessageText === ''}
                    >Sent Message
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs