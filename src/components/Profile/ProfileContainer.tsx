import React from "react";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserPofileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from "../../Redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorisedUserId: string | null
}
type MapDispatchToPropsType = {
    getUserPofileThunkCreator: (userId: string | null) => void
    getStatusThunkCreator: (userId: string | null) => void
    updateStatusThunkCreator: (status: string) => void
}
type PathParamsType = {
    userId: string | null
}

// @ts-ignore
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType
export type OwnProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileClassContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId;
        }
        this.props.getUserPofileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         getUserPofileThunkCreator={this.props.getUserPofileThunkCreator}
                         getStatusThunkCreator={this.props.getStatusThunkCreator}
                         updateStatusThunkCreator={this.props.updateStatusThunkCreator}

                />
            </div>
        )
    }

}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.data.id,
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
        getUserPofileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator
    }),
    withRouter
)(ProfileClassContainer)
