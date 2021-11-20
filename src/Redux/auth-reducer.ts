import {socialNetAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";

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

export const getUserDataThunkCreator = () => {
    return (dispatch: Dispatch<ActionType>) => {
        socialNetAPI.setUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data.id, response.data.data.email, response.data.data.login))
            }
        })
    }
}

export const loginTC = (email: string, password: string, remeberMe: boolean):ThunkAction<void, AppRootStateType, void, ActionType> => (dispatch) => {
socialNetAPI.login(email, password, remeberMe)
    .then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(getUserDataThunkCreator())
        }
    })
}

export default authReducer;
