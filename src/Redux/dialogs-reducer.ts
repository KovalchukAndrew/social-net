
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
            {id: '1', name: "Andrew"},
            {id: '2', name: "Polly"},
            {id: '3', name: "Kirill"},
            {id: '4', name: "John"},
        ] as Array<DialogType>,
        messages: [
            {id: '1', message: "Hi"},
            {id: '2', message: "How are you"},
            {id: '3', message: "What's up"},
            {id: '4', message: "Yo"},
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