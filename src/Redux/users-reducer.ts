import {v1} from "uuid";

export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type LocationType = {
    city: string
    country: string
}

let initialState = {
        users: [
            {id: v1(), photoUrl: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", followed: true, fullName: "Andrew", status: "Hello, you are welcome", location: {city: "Minsk", country: "Belarus"}},
            {id: v1(), photoUrl: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", followed: false, fullName: "Andrew", status: "Hello, you are welcome", location: {city: "Minsk", country: "Belarus"}},
            {id: v1(), photoUrl: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", followed: true, fullName: "Andrew", status: "Hello, you are welcome", location: {city: "Minsk", country: "Belarus"}},
            {id: v1(), photoUrl: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", followed: false, fullName: "Andrew", status: "Hello, you are welcome", location: {city: "Minsk", country: "Belarus"}},
            {id: v1(), photoUrl: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", followed: true, fullName: "Andrew", status: "Hello, you are welcome", location: {city: "Minsk", country: "Belarus"}},

        ] as Array<UserType>,

    }
export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true } : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false } : u)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export type ActionType = FollowActionType | UnfollowActionType | SetUsersActionType

export const followAC = (id: string) => {
    return {type: "FOLLOW", id} as const
}
export const unfollowAC = (id: string) => {
    return {type: "UNFOLLOW", id} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: "SET-USERS", users} as const
}
export default usersReducer;