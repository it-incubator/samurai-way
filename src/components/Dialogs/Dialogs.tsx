import React from 'react';
import c from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {MessageFormDataType, MessageReduxForm} from './NewMessageForm/MessageReduxForm';

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

    const addNewMessage = (formData: MessageFormDataType) => {
        props.addMessage(formData.newMessage) //data from fields
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                <ul>{dialogsDataMap}</ul>
            </div>
            <div className={c.dialogs_messages}>
                <ul>{messagesDataMap}</ul>
                <div className={c.dialogs_AddPostWrapper}>

                    <MessageReduxForm onSubmit={addNewMessage}/>

                    {/*<textarea className={c.dialogs_form}*/}
                    {/*          onChange={onMessageChange}*/}
                    {/*          value={props.newMessageText}*/}
                    {/*></textarea>*/}
                    {/*<button className={c.dialogs_button}*/}
                    {/*        onClick={onAddMessage}*/}
                    {/*        disabled={props.newMessageText === ''}*/}
                    {/*>Sent Message*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
}
export default Dialogs