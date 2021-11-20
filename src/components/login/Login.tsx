import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginTC} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    password: string
    remeberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"email"} placeholder={"email"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"password"} type={"password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};
const LoginReduxForm = reduxForm<FormDataType>(
    {
        form: 'login',
    }
)(LoginForm)

const Login:React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.remeberMe)
    }
    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}
type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, remeberMe: boolean) => void
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);

//ERXL87mDka!ej8i