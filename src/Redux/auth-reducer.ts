import {socialNetAPI} from "../api/api";
import {Dispatch} from "redux";

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
    return (dispatch: Dispatch<ActionType>) => {
        socialNetAPI.setUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data.id, response.data.data.email, response.data.data.login))
            }
        })
    }
}

/*export const loginTC = (email: string, password: string, remeberMe: boolean) => (dispatch: Dispatch<ActionType>) => {
socialNetAPI.login(email, password, remeberMe)
    .then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(SetUserDataThunkCreator())
        }
    })
}*/

export default authReducer;
