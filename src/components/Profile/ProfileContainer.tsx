import React from "react";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {ActionType, ProfileType, setProfileUsers} from "../../Redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {socialNetAPI} from "../../api/api";

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setProfileUsersThunkCreator: (userId: string) => void
}
type PathParamsType = {
    userId: string

}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType
export type OwnProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileClassContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setProfileUsersThunkCreator(userId)

    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}

                         setProfileUsersThunkCreator={this.props.setProfileUsersThunkCreator}
                />
            </div>
        )
    }

}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileClassContainer);
export default connect(mapStateToProps, {
    setProfileUsersThunkCreator: (userId: string) => {
        return (dispatch: ({}: ActionType) => void) => {
            socialNetAPI.setProfileUsers(userId).then(response => {
                dispatch(setProfileUsers(response.data))
            })
        }
    }
})(WithUrlDataContainerComponent);

