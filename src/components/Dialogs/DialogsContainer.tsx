import React, {ChangeEvent, KeyboardEvent} from "react";

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType, sendMessageBodyAC, updateNewMessageBodyAC
} from "../../Redux/dialogs-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";

export type DialogsPropsType = {
    store: AppRootStateType
    //usersArray: Array<UsersArrayType>
    //messages: Array<MessagesType>
    //newMessageBogy: string
    dispatch: (action:ActionType) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.dialogsPage
    const onSendMessageClick = () => {
        props.dispatch(sendMessageBodyAC())
    }
    const onNewMessageChange = (body:string) => {

        props.dispatch(updateNewMessageBodyAC(body))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.dispatch(sendMessageBodyAC())
        }
    }
    return (
        <Dialogs sendMessageBody={onSendMessageClick}
                 updateNewMessageBody={onNewMessageChange}
                 dialogsPage={state}
        />
    )
}