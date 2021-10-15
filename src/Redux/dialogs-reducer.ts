import {DialogsType} from "./store";

let initialState: DialogsType = {
        usersArray: [
            {id: '1', name: "Andrew"},
            {id: '2', name: "Polly"},
            {id: '3', name: "Kirill"},
            {id: '4', name: "John"},
        ],
        messages: [
            {id: '1', message: "Hi"},
            {id: '2', message: "How are you"},
            {id: '3', message: "What's up"},
            {id: '4', message: "Yo"},
        ],
        newMessageBogy: "",
    }
const dialogsReducer = (state: DialogsType = initialState, action: ActionType):DialogsType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBogy = action.body;
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBogy;
            state.newMessageBogy = "";
            state.messages.push({id: '6', message: body});
            return state
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