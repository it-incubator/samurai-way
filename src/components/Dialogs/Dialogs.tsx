import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';


type DialogsPropsType = {
    dialogsState: DialogsPageType
}


export const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.dialogsState.names
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    const messagesElements = props.dialogsState.messages
        .map(message => <Message message={message.message} time={message.time}/>)

    const sendMessage = () => {
        if(newMessage.current){
            let text = newMessage.current.value;
            alert(text)
            newMessage.current.value = '';
        }

    }

    let newMessage = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <textarea name="" id="" ref={newMessage}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

