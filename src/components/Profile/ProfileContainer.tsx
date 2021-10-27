import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setProfileUsers} from "../../Redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom'


type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setProfileUsers: (profile: ProfileType) => void
}
type PathParamsType = {
    userId: string
}
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType
export type OwnProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileClassContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.setProfileUsers(response.data)
            })
    }

    render () {
        return (
            <div>
                <Profile profile={this.props.profile}
                         setProfileUsers={this.props.setProfileUsers}
                />
                </div>
        )
    }

}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileClassContainer)
export default connect (mapStateToProps, {setProfileUsers
})(WithUrlDataContainerComponent);

