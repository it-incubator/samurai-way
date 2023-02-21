import React, {ChangeEvent, useState} from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogTypeApp,MessageTypeApp} from "../../App";
import { AddPostDialogsActionCreator, AllAction} from "../../Redux/state";

type DialogsType = {
    DialogData:DialogTypeApp[]
    MessageData:MessageTypeApp[]
    dispatch:(action:AllAction)=>void
}

export  const Dialogs = (props:DialogsType) => {




    const AddPost = ()=> {
    // if(newPost.current){props.AddPostDialogs(newPost.current?.value)}
        props.dispatch(AddPostDialogsActionCreator(inputValue))
        setInputValue('')
}

const [inputValue,setInputValue]=useState('')

const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
    setInputValue(e.currentTarget.value)

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
                    <input onChange={onChangeHandler}  value={inputValue} />
                    <button onClick={AddPost}>Add</button>
                </div>

            </div>
        </div>

    );
};

