import {v1} from "uuid";

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}

let initialState = {
        dialogs: [
            {id: v1(), name: "Andrew"},
            {id: v1(), name: "Polly"},
            {id: v1(), name: "Kirill"},
            {id: v1(), name: "John"},
        ] as Array<DialogType>,
        messages: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "How are you"},
            {id: v1(), message: "What's up"},
            {id: v1(), message: "Yo"},
        ] as Array<MessageType>,
        newMessageBogy: "",
    }

    export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
        {

            return {...state, newMessageBogy: action.body}

        }
            /*state.newMessageBogy = action.body;*/

        case "SEND-MESSAGE":
        {

            return {...state, messages: [...state.messages, {id: '6', message: state.newMessageBogy}], newMessageBogy: ""}
/*
            state.newMessageBogy = ""
*/
        }
            /*let body = state.newMessageBogy;
            state.newMessageBogy = "";
            state.messages.push({id: '6', message: body});*/

        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangePostMessageActionType = ReturnType<typeof changePostMessageAC>
export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export type SendNewMessageBody = ReturnType<typeof sendMessageBodyAC>
export type ActionType = AddPostActionType | ChangePostMessageActionType | UpdateNewMessageBody | SendNewMessageBody

export const addPostAC = (textPost: string) => {
    return {type: "ADD-POST", textPost} as const
}
export const changePostMessageAC = (text: string) => {
    return {type: "CHANGE-POST-MESSAGE", text} as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-BODY", body} as const
}
export const sendMessageBodyAC = () => {
    return {type: "SEND-MESSAGE"} as const
}

export default dialogsReducer;