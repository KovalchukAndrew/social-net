import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {SetUserDataThunkCreator} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";


type MapDispatchToPropsType = {
    SetUserDataThunkCreator: () => void
}

type MapStateToPropsType = {
    id: string,
    email: string,
    login: string,
    isAuth: boolean
}

export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.SetUserDataThunkCreator()
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
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

export default connect(mapStateToProps, {SetUserDataThunkCreator})(HeaderContainer);