import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {getUserDataThunkCreator, SetUserDataActionType} from "./auth-reducer";

export type DataType = {
    id: string | null,
    email: string | null,
    login: string | null,
}

let initialState = {
    //data: {} as DataType,
    initialized: false,
}
export type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}

        default:
            return state
    }
}

export type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>

export type ActionType = InitializedSuccessActionType
    | SetUserDataActionType

export const initializedSuccess = () => {
    return {type: "INITIALIZED-SUCCESS"} as const
}

export const initialize = (): ThunkAction<void, AppRootStateType, void, ActionType> => (dispatch) => {
    let promise = dispatch(getUserDataThunkCreator())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;
