import style from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
                <ul className={style.dialogsItems}>
                    <Dialog name = 'Andrey' id ='1'/>
                    <Dialog name = 'Alexey' id ='2'/>
                    <Dialog name = 'Alexander' id ='3'/>
                    <Dialog name = 'Anton' id ='4'/>
                    <Dialog name = 'Artem' id ='5'/>

                </ul>
            <div className={style.messages}>
                <Message message ='11111'/>
                <Message message ='22222'/>
                <Message message ='33333'/>
            </div>
        </div>
    )
}