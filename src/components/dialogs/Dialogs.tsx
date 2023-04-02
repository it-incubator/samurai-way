import style from './Dialogs.module.css'

import {DialogItem} from "./dialogItem/Dialog"
import {Message} from "./message/Message"

import {DialogsPageType} from "../../redux/state"
import React from "react";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    onClickCallBack: (value: string, path: string) => void
    onChangeInput: (value: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const {dialogsPage: {dialogsData, messagesData, dialogsInputState},onClickCallBack, onChangeInput} = props

    const dialogsDataRender = dialogsData.map(element => {
        const {id, name} = element

        return(
            <DialogItem name = {name} id = {id} key = {id}/>
        )
    })
    const messagesDataRender = messagesData.map(element => {
        const {id, message} = element

        return(
            <Message message = {message} id = {id} key = {id}/>
        )
    })

    const newMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        const text = newMessageRef.current ? newMessageRef.current.value : ''
        onClickCallBack(text, 'message')
    }

    const onChangeHandler = () => {
        const text = newMessageRef.current ? newMessageRef.current.value : ''
        onChangeInput(text)
    }

    return (
        <div className={style.wrapper}>
        <div className={style.dialogs}>
                <ul className={style.dialogsItems}>
                    {dialogsDataRender}
                </ul>
            <div className={style.messages}>
                {messagesDataRender}
            </div>
        </div>
            <div className={style.inputText}>
            <textarea ref={newMessageRef} onChange={onChangeHandler} value={dialogsInputState}></textarea>
            <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}