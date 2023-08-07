import React from 'react';
import {AuthAPI, AuthInitializationStateType} from "../../API/Auth-api";
import {Login} from "./Login";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {AuthAC, SET_AuthAC} from "../../Redux/authReducer";
import {connect} from "react-redux";




export class LoginWrapper extends React.Component<MyAuthType> {


    componentDidMount() {

        AuthAPI.getUser()
            .then((res) => {

                this.props.setAuth(res.data.data.login);


            })
    }


    render() {




        return (


            <Login addAuth={this.props.addAuth}
                   authReducer={this.props.authReducer.data.login}
            />


        );
    }
}


type mapStateToPropsType ={
    authReducer:AuthInitializationStateType

}

const mapStateToProps =(state:StoreType)=> {
    return {

        authReducer:state.authReducer



    }
}

type mapDispatchToPropsType = {
    addAuth:(email:string,login:string)=>void
    setAuth:(login:string)=>void
}

export type MyAuthType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=> {
    return {

        addAuth:(email:string,login:string)=> {
            dispatch(AuthAC(email,login))
        },
        setAuth:(login:string)=> {
            dispatch(SET_AuthAC(login))
        }
    }
}


export const  LoginContainer  = connect(mapStateToProps,mapDispatchToProps)(LoginWrapper)
