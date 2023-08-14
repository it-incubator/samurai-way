import React from 'react';
import {AuthAPI, AuthInitializationStateType} from "../../API/Auth-api";
import {FormDataType, Login} from "./Login";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import { ThunkAuth, ThunkLogin} from "../../Redux/authReducer";
import {connect} from "react-redux";


export class LoginWrapper extends React.Component<MyAuthType> {


    componentDidMount() {

            this.props.setAuth()


    }


    render() {

        const Autme = (formData:FormDataType) => {
            this.props.addAuth(formData)
        }


        return (


            <Login Authme={Autme}/>


        );
    }
}


type mapStateToPropsType = {
    authReducer: AuthInitializationStateType

}

const mapStateToProps = (state: StoreType) => {

    return {

        authReducer: state.authReducer


    }
}

type mapDispatchToPropsType = {
    addAuth: (formData:FormDataType) => void
    setAuth: () => void
}

export type MyAuthType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps = (dispatch:AppDispatchType): mapDispatchToPropsType => {

    return {

        addAuth: (formData:FormDataType) => {
            dispatch(ThunkLogin(formData))
        },
        setAuth: () => {
            dispatch(ThunkAuth())
        }
    }
}


export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)
