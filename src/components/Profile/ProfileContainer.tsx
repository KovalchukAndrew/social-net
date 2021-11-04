import React from "react";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {getUserPofileThunkCreator, ProfileType} from "../../Redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {WithAuthRedirect} from "../HOC/withAuthRedirectComponent";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    getUserPofileThunkCreator: (userId: string) => void
}
type PathParamsType = {
    userId: string

}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType
export type OwnProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileClassContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserPofileThunkCreator(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}
                         getUserPofileThunkCreator={this.props.getUserPofileThunkCreator}
                />
            </div>
        )
    }

}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default compose<React.ComponentType> (connect(mapStateToProps, {
    getUserPofileThunkCreator
}),
    WithAuthRedirect,
    withRouter
) (ProfileClassContainer)
