import React from 'react';
import { AuthInitializationStateType} from "../../API/Auth-api";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import { ThunkAuth} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Header} from "./Header";




export class HeaderWrapper extends React.Component<MyAuthType> {


    componentDidMount() {
      this.props.setAuth()

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

    setAuth:()=>void
}

export type MyAuthType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps =(dispatch:AppDispatchType):mapDispatchToPropsType=> {
    return {

        setAuth:()=> {
            dispatch(ThunkAuth())
        }
    }
}


export const  HeaderContainer  = connect(mapStateToProps,mapDispatchToProps)(HeaderWrapper)