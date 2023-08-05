import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {StoreType} from "../../Redux/redux-store";
import {connect} from "react-redux";


type MapStatePropsType ={
    isAuth:string
}

const mapStateToProps =(state:StoreType):MapStatePropsType=> (
    {
       isAuth:state.authReducer.data.login
    }
)


function withAuthRedirect <T> (Component:ComponentType<T>)  {

    const RedirectComponent =(props:MapStatePropsType)=>{

        let {isAuth,...restProps}=props

            if (!isAuth  ) return <Redirect to={'./login'}/>
            return <Component  {...restProps as T}/>

    }


const ConnectedAuthRedirect =connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirect
};

export default withAuthRedirect;