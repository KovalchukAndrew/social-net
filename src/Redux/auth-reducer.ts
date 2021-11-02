import {socialNetAPI} from "../api/api";
import {isFetching, setTotalUsersCount, setUsers} from "./users-reducer";
import axios from "axios";

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
/*
const arr = [
    {
        x: 1,

        children: [
            {
                x: 2,
                children: [],
            },
        ]
    },
    {
        x: 1,
        children: [
            {
                x: 2,
                children: [],
            },
        ]
    },
];

export const rec = (array) => {
    array.forEach(item => {
        item.x = 10;
        rec(item.children);
    })
    const array2 = []
    array.forEach((item, index) => {
        array2[index] = item;
    })
}*/

export default authReducer;
