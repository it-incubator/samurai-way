import React from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogTypeApp,MessageTypeApp} from "../../App";

type DialogsType = {
    DialogData:DialogTypeApp[]
    MessageData:MessageTypeApp[]
}

export  const Dialogs = (props:DialogsType) => {


let newPost = React.createRef<HTMLTextAreaElement>()

    const AddPost = ()=> {
    alert(newPost.current?.value)
    }

    return ( <div className={s.items}>
            <div className={s.dialogs}>

                {props.DialogData.map((d)=>{ return (
                    <DialogItem name={d.name} id={d.id}/>
                )

                })}



            </div>
            <div>
                <div className={s.messages}>


                    {props.MessageData.map((m)=>{
                        return (
                            <Message message={m.message}/>
                        )
                    })}


                </div>
                <div>
                    <textarea ref={newPost}/><button onClick={AddPost}>Add</button>
                </div>

            </div>
        </div>

    );
};

