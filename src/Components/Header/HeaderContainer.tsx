import React from 'react';
import {AuthAPI, AuthInitializationStateType} from "../../API/Auth-api";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {AuthAC, SET_AuthAC} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Header} from "./Header";




export class HeaderWrapper extends React.Component<MyAuthType> {


    componentDidMount() {

        AuthAPI.getUser()
            .then((res) => {
                this.props.setAuth(res.data.data.login);
            })
    }


    render() {

        return (

            <Header authReducer={this.props.authReducer.data.login}/>


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

type mapDispatchToPropsType ={

    setAuth:(login:string)=>void
}

export type MyAuthType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=> {
    return {

        setAuth:(login:string)=> {
            dispatch(SET_AuthAC(login))
        }
    }
}


export const  HeaderContainer  = connect(mapStateToProps,mapDispatchToProps)(HeaderWrapper)