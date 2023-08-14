import React from 'react';
import {AuthInitializationStateType} from "../../API/Auth-api";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Header} from "./Header";


export class HeaderWrapper extends React.Component<MyAuthType> {


    componentDidMount() {
    }


    render() {

        return (

            <Header login={this.props.authReducer.data.login}
                    isAuth={this.props.authReducer.isAuth}/>


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

type mapDispatchToPropsType = {}

export type MyAuthType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {
    return {}
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper)