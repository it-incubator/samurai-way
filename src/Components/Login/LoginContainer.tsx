import React from 'react';
import {AuthInitializationStateType} from "../../API/Auth-api";
import {FormDataType, Login} from "./Login";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import {ThunkAuth, ThunkLogin} from "../../Redux/authReducer";
import {connect} from "react-redux";


export class LoginWrapper extends React.Component<MyAuthType> {


    componentDidMount() {

        this.props.setAuth()


    }


    render() {

        const Autme = (formData: FormDataType) => {
            this.props.addAuth(formData)
        }


        return (


            <Login Authme={Autme} isAuth={this.props.authReducer.isAuth}
                   captchaUrl={this.props.captchaUrl}
            />


        );
    }
}


type mapStateToPropsType = {
    authReducer: AuthInitializationStateType
    captchaUrl: string|null
}

const mapStateToProps = (state: StoreType) => {

    return {

        authReducer: state.authReducer,
        captchaUrl: state.authReducer.captchaUrl
    }
}

type mapDispatchToPropsType = {
    addAuth: (formData: FormDataType) => void
    setAuth: () => void
}

export type MyAuthType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {

    return {

        addAuth: (formData: FormDataType) => {
            dispatch(ThunkLogin(formData))
        },
        setAuth: () => {
            dispatch(ThunkAuth())
        }
    }
}


export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)
