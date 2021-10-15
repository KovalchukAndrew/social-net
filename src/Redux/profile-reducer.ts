import {PostsType, ProfileType} from "./appState";

const profileReducer = (state: ProfileType, action: ActionType):ProfileType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {id: "4", message: action.textPost, likeCount: 0};
            state.posts.push(newPost)
            state.newPostText = ""
            return state

        case "CHANGE-POST-MESSAGE":
            state.newPostText = action.text
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
export default profileReducer;