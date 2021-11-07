import {InitialStateType, sendMessageBodyAC} from "../../Redux/dialogs-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../HOC/withAuthRedirectComponent";
import React from "react";

type mapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessageBody: (newMessageBody: string) => void
}

export type DialogsPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessageBody: (newMessageBody: string) => {
            dispatch(sendMessageBodyAC(newMessageBody))
        },
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);