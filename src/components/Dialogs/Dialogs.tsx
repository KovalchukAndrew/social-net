import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType, sendMessageBodyAC, updateNewMessageBodyAC
} from "../../Redux/dialogs-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {DialogsType} from "../../Redux/store";

export type DialogsPropsType = {
    sendMessageBody: () => void
    updateNewMessageBody: (body:string) => void
    dialogsPage: DialogsType
    //store: AppRootStateType
    //usersArray: Array<UsersArrayType>
    //messages: Array<MessagesType>
    //newMessageBogy: string
    //dispatch: (action:ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElemets = props.dialogsPage.usersArray.map(user => <DialogItem name={user.name} id={user.id}/>)
    let messagesElement = props.dialogsPage.messages.map(message => <Message text={message.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBogy;

    const onSendMessageClick = () => {
        props.sendMessageBody()
        //props.dispatch(sendMessageBodyAC())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        //let bogy = e.target.value
        props.updateNewMessageBody(e.target.value)
        //props.dispatch(updateNewMessageBodyAC(bogy))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.sendMessageBody()
            //props.dispatch(sendMessageBodyAC())
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