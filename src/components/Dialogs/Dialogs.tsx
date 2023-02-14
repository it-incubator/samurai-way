import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'

 export const Dialogs = (props:any) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                <div className={c.dialog}>Sasha</div>
                <div className={c.dialog}>Tanya</div>
                <div className={c.dialog}>Artem</div>
                <div className={c.dialog}>Regina</div>
                <div className={c.dialog}>Maksim</div>
            </div>

            <div className={c.dialogs_messages}>
                <div className={c.message}>Hello ! Dear friend ! </div>
                <div className={c.message}>i'm afraid of this lessons</div>
                <div className={c.message}>when will you return?</div>
                <div className={c.message}>What films do you prefer?</div>
                <div className={c.message}>How are you?</div>
            </div>
        </div>
    );
}