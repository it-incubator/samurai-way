import React from 'react';
import {addMessageAC, initialStateDialogsType, updateMessageAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store-redux';
import {compose, Dispatch} from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import Dialogs from './Dialogs';

type mapStateToPropsType = initialStateDialogsType
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

export default compose<React.ComponentType>(
    WithAuthRedirect, //2
    connect(mapStateToProps, mapDispatchToProps),//1
)(Dialogs);

