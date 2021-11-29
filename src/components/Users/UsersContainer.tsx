import React from "react";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    FilterType,
    FollowThunkCreator, getUsersThunkCreator, isFollowingProgress,
    setCurrentPage,
    UnfollowThunkCreator,
    UserType
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage, getFilter,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../Redux/users-selectors";


type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
    filter: FilterType
}

type MapDispatchToPropsType = {
    FollowThunkCreator: (id: number) => void
    UnfollowThunkCreator: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    isFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number, term: string) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersClassComponent extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, "")
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize, "")
    }
    onFilterChanged = (filter: FilterType) => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, filter.term)
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onFilterChanged={this.onFilterChanged}
                users={this.props.users}
                UnfollowThunkCreator={this.props.UnfollowThunkCreator}
                FollowThunkCreator={this.props.FollowThunkCreator}
                followingInProgress={this.props.followingInProgress}
                isFollowingProgress={this.props.isFollowingProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state)
    }
}

export const UsersContainer = connect(mapStateToProps, {
    FollowThunkCreator, UnfollowThunkCreator, setCurrentPage, isFollowingProgress, getUsersThunkCreator
})(UsersClassComponent);