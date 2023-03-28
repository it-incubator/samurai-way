import React from 'react';
import c from '../Dialogs.module.css';
import {MessageType} from '../../../redux/dialogs-reducer';

type MessagePropsType={
    message: MessageType
}

export const Message: React.FC<MessagePropsType> = (props) => {

    return <div className={c.message}>
        {props.message.message}
    </div>
}