import React from "react";
import {
    InitialStateType, sendMessageBodyAC, updateNewMessageBodyAC
} from "../../Redux/dialogs-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

/*
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
*/

type mapStateToPropsType ={
    dialogsPage: InitialStateType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessageBody: () => void
}

export type DialogsPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessageBody: () => {
            dispatch(sendMessageBodyAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);