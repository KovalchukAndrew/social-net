import {v1} from "uuid";
import {socialNetAPI} from "../api/api";
import {Dispatch} from "redux";

export type PostsType = {
    id: string
    message: string
    likeCount: number
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}


let initialState = {
        posts: [
            {id: v1(), message: "Hi, how are you?", likeCount: 15},
            {id: v1(), message: "This is my first message!", likeCount: 11},
        ] as Array<PostsType>,
        newPostText: "",
    profile: {} as ProfileType,
    }
export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
        {
            state.newPostText = ""
            return {...state, posts: [...state.posts, {id: v1(), message: action.textPost, likeCount: 0}]}
        }

        case "CHANGE-POST-MESSAGE":
            return {...state, newPostText: action.text}
        case "SET-PROFILE-USER":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangePostMessageActionType = ReturnType<typeof changePostMessageAC>
export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export type SendNewMessageBody = ReturnType<typeof sendMessageBodyAC>
export type setProfileUsers = ReturnType<typeof setProfileUsers>
export type ActionType = AddPostActionType | ChangePostMessageActionType | UpdateNewMessageBody | SendNewMessageBody | setProfileUsers

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
export const setProfileUsers = (profile: ProfileType) => {
    return {type: "SET-PROFILE-USER", profile} as const
}

export const getUserPofileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        socialNetAPI.setProfileUsers(userId).then(response => {
            dispatch(setProfileUsers(response.data))
        })
    }
}

export default profileReducer;