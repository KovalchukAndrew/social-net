import React from "react";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: string) => {
            dispatch(followAC(id));
        },
        unfollow: (id: string) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
    }
}


    export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);