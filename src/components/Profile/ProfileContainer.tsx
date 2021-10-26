import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setProfileUsers} from "../../Redux/profile-reducer";


type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setProfileUsers: (profile: ProfileType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
class ProfileClassContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfileUsers(response.data as ProfileType)
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

export default connect (mapStateToProps, {setProfileUsers
})(ProfileClassContainer);

