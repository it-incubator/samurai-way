import React, {ChangeEvent, useState} from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MyDialogType} from "./DialogsContainer";





export  const Dialogs = (props:MyDialogType) => {




    const AddPost = ()=> {
    // if(newPost.current){props.AddPostDialogs(newPost.current?.value)}
        props.addPost(inputValue)
        // props.dispatch(AddPostDialogsActionCreator(inputValue))
        setInputValue('')
}

const [inputValue,setInputValue]=useState('')

const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
    setInputValue(e.currentTarget.value)

}
    return ( <div className={s.items}>
            <div className={s.dialogs}>

                {props.dialogsReducer.data.map((d)=>{ return (
                    <DialogItem name={d.name} id={d.id}/>
                )

                })}



            </div>
            <div>
                <div className={s.messages}>


                    {props.dialogsReducer.message.map((m)=>{
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

