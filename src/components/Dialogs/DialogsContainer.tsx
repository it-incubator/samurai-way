import React from 'react';
import {addMessageAC, initialStateDialogsType, updateMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store-redux';
import {Dispatch} from 'redux';

type mapStateToPropsType = initialStateDialogsType & {isAuth: boolean}
type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
    onMessageChange: (value: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch)
    : mapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        },
        onMessageChange: (value: string) => {
            dispatch(updateMessageAC(value))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

