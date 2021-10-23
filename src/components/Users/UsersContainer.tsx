import React from "react";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../Redux/users-reducer";
import Users from "./Users";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id));
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
    }
}


    export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);