import {socialNetAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";

export type DataType = {
    id: string | null,
    email: string | null,
    login: string | null,
}

let initialState = {
    data: {} as DataType,
    isAuth: false,
}
export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, data: action.data, isAuth: action.isAuth}

        default:
            return state
    }
}

export type SetUserDataActionType = ReturnType<typeof setUserData>

export type ActionType = SetUserDataActionType

export const setUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: "SET-USER-DATA", data: {id, email, login}, isAuth} as const
}

export const getUserDataThunkCreator = () => (dispatch: Dispatch<ActionType>) => {
    return socialNetAPI.setUser().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
        }
    })
}

export const loginTC = (email: string, password: string, remeberMe: boolean): ThunkAction<void, AppRootStateType, void, ActionType | FormAction> => (dispatch) => {

    socialNetAPI.login(email, password, remeberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getUserDataThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"

                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch<ActionType>) => {
    socialNetAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}

export default authReducer;
