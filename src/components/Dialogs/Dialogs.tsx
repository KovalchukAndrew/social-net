import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElemets = props.dialogsPage.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
    let messagesElement = props.dialogsPage.messages.map(message => <Message text={message.message}/>)

    const addNewMessage = (values: FormDataType) => {
        props.sendMessageBody(values.newMessageBody)
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsElemets}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
        <div>
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    </div>
}

type FormDataType = {
    newMessageBody: string
}

export  const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter message"}/>
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
};
const MessageReduxForm = reduxForm<FormDataType>(
    {
        form: 'newMessageBody',
    }
)(AddMessageForm)

const newMessage = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    )

}