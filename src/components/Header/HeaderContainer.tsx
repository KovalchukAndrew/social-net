import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DataType, setUserData} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";


type MapDispatchToPropsType = {
    setUserData: (userId: string, email: string, login: string) => void
}

type MapStateToPropsType = {
    id: string,
    email:  string,
    login:  string,
    isAuth: boolean
}

export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<{resultCode: number, data: DataType }>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data.id, response.data.data.email, response.data.data.login)
                }

            })
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}



const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        id: state.auth.data.id,
        email:  state.auth.data.email,
        login:  state.auth.data.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setUserData}) (HeaderContainer);