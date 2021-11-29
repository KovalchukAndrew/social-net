import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";


type MapDispatchToPropsType = {
    logoutTC: () => void
}

type MapStateToPropsType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.logoutTC()
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logoutTC={this.props.logoutTC}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        id: state.auth.data.id,
        email: state.auth.data.email,
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logoutTC})(HeaderContainer);