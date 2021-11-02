import {socialNetAPI} from "../api/api";

export type DataType = {
    id: string,
    email: string,
    login: string,
}

let initialState = {
    data: {} as DataType,
    isAuth: false,
}
export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, data: action.data, isAuth: true}

        default:
            return state
    }
}

export type SetUserDataActionType = ReturnType<typeof setUserData>

export type ActionType = SetUserDataActionType

export const setUserData = (id: string, email: string, login: string) => {
    return {type: "SET-USER-DATA", data: {id, email, login}} as const
}

export const SetUserDataThunkCreator = () => {
    return (dispatch: ({}: ActionType) => void) => {
        socialNetAPI.setUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data.id, response.data.data.email, response.data.data.login))
            }
        })
    }
}

export default authReducer;
