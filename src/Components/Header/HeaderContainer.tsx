import React from 'react';
import {AuthInitializationStateType} from "../../API/Auth-api";
import {AppDispatchType, StoreType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Header} from "./Header";
import {ThunkLogout} from "../../Redux/authReducer";


export class HeaderWrapper extends React.Component<MyAuthType> {




    render() {

        return (

            <Header login={this.props.authReducer.data.login}
                    isAuth={this.props.authReducer.isAuth}
                    logout={this.props.logout}
            />


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
    logout:()=>void
}

export type MyAuthType = mapDispatchToPropsType & mapStateToPropsType

const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {
    return {
        logout:()=> {
            dispatch(ThunkLogout())
        },
    }
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper)