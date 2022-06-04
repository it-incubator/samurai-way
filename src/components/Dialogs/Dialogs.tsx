import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './DialogItem/Message/Message';




export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Sanya'} id={2}/>
                <DialogItem name={'Olya'} id={3}/>
                <DialogItem name={'Valera'} id={4}/>
                <DialogItem name={'Viktor'} id={5}/>
            </div>
            <div className={s.messages}>
               <Message message={'Hi!'}/>
               <Message message={'How are u?'}/>
               <Message message={'????'}/>
            </div>
        </div>
    );
};

