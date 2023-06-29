import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AuthData, initialStateUserDataType, logoutUserTC, setAuthUserData } from "redux/auth-reducer";
import { AppRootStateType } from "redux/store-redux";

type mapStateToPropsType = initialStateUserDataType;
export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;
type mapDispatchToPropsType = {
  setAuthUserData: (data: AuthData) => void;
  logoutUserTC: () => void;
};
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  //data
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
  //прокидываем в компоненту
};

export default connect(mapStateToProps, {
  setAuthUserData,
  logoutUserTC,
})(HeaderContainer);
