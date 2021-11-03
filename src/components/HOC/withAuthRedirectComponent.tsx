import React, {ComponentType} from "react";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppRootStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

type WithAuthRedirectPropsType = mapStateToPropsForRedirectType

export function WithAuthRedirect <T>(Component: ComponentType<T>) {

    class RedirectComponent extends React.Component<mapStateToPropsForRedirectType> {
        render() {
            if (!this.props.isAuth) {
              return <Redirect to={'/login'} />
            }
            return <Component {...this.props as any  }/>
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}