import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { AppRootStateType } from "../redux/store-redux";

type mapStateToPropsForRedirectType = {
  isAuth: boolean;
};
const mapStateToPropsForRedirect = (state: AppRootStateType): mapStateToPropsForRedirectType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

function WithAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
    let { isAuth, ...restProps } = props;
    if (!props.isAuth) return <Navigate to={"/login"} />;
    return <Component {...(restProps as T)} />;
  };
  let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedRedirectComponent;
}
export default WithAuthRedirect;
