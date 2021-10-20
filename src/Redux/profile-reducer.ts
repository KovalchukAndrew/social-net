export type PostsType = {
    id: string
    message: string
    likeCount: number
}

let initialState = {
        posts: [
            {id: '1', message: "Hi, how are you?", likeCount: 15},
            {id: '2', message: "This is my first message!", likeCount: 11},
        ] as Array<PostsType>,
        newPostText: "",
    }
export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
        {
            state.newPostText = ""
            return {...state, posts: [...state.posts, {id: "4", message: action.textPost, likeCount: 0}]}
        }

        case "CHANGE-POST-MESSAGE":
            return {...state, newPostText: action.text}
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