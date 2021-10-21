import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElemets = props.dialogsPage.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
    let messagesElement = props.dialogsPage.messages.map(message => <Message text={message.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBogy;

    const onSendMessageClick = () => {
        props.sendMessageBody()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.target.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.sendMessageBody()
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
                onKeyPress={onKeyPressHandler}>
            </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Add message</button>
            </div>
        </div>
    </div>
}