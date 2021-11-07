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
    profile: {} as ProfileType,
    status: "",
    }
export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
        {
            return {...state, posts: [...state.posts, {id: v1(), message: action.textPost, likeCount: 0}]}
        }
        case "SET-PROFILE-USER":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export type SendNewMessageBody = ReturnType<typeof sendMessageBodyAC>
export type setProfileUsers = ReturnType<typeof setProfileUsers>
export type setStatusActionType = ReturnType<typeof setStatus>

export type ActionType = AddPostActionType | UpdateNewMessageBody | SendNewMessageBody | setProfileUsers | setStatusActionType

export const addPostAC = (textPost: string) => {
    return {type: "ADD-POST", textPost} as const
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
export const setStatus = (status: string) => {
    return {type: "SET-STATUS", status} as const
}

export const getUserPofileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        socialNetAPI.setProfileUsers(userId).then(response => {
            dispatch(setProfileUsers(response.data))
        })
    }
}

export const getStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        socialNetAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        socialNetAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
    }
}

export default profileReducer;