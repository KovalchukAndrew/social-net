import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    DialogsType,
    MessagesType,
    RootAppStateType, sendMessageBodyAC,
    updateNewMessageBodyAC,
    UsersArrayType
} from "../../Redux/store";

export type DialogsPropsType = {
    usersArray: Array<UsersArrayType>
    messages: Array<MessagesType>
    newMessageBogy: string
    dispatch: (action:ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElemets = props.usersArray.map(user => <DialogItem name={user.name} id={user.id}/>)
    let messagesElement = props.messages.map(message => <Message text={message.message}/>)
    let newMessageBody = props.newMessageBogy;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageBodyAC())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let bogy = e.target.value
        props.dispatch(updateNewMessageBodyAC(bogy))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.dispatch(sendMessageBodyAC())
        }
    }



    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsElemets}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
        <div>
            <div><textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter message"
                onKeyPress={onKeyPressHandler}
            ></textarea></div>
            <div><button onClick={onSendMessageClick}>Add message</button></div>
        </div>
    </div>
}