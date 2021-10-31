export type UserType = {
    name: string
    id: number
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
    uniqueUrlName: null | string
    isFetching: boolean
}
export type LocationType = {
    city: string
    country: string
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}
export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUserCount: action.totalCount}
        case "IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "IS-FOLLOWING-PROGRESS":
            return {...state, followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type isFetchingActionType = ReturnType<typeof isFetching>
export type isFollowingProgressActionType = ReturnType<typeof isFollowingProgress>

export type ActionType = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageActionType | setTotalUsersCountActionType | isFetchingActionType | isFollowingProgressActionType

export const follow = (id: number) => {
    return {type: "FOLLOW", id} as const
}
export const unfollow = (id: number) => {
    return {type: "UNFOLLOW", id} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: "SET-USERS", users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return{type: "SET-CURRENT-PAGE", currentPage} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return{type: "SET-TOTAL-COUNT", totalCount} as const
}
export const isFetching = (isFetching: boolean) => {
    return{type: "IS-FETCHING", isFetching} as const
}
export const isFollowingProgress = (isFetching: boolean, userId: number) => {
    return{type: "IS-FOLLOWING-PROGRESS", isFetching, userId} as const
}
export default usersReducer;