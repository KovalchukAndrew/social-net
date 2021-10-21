import React from "react";
import s from './../Dialogs.module.css'

export type MessageType = {
    text: string
}

export const Message = (props: MessageType) => {
    return <div className={s.message}>{props.text}</div>
}

