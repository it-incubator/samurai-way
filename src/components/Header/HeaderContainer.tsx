import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AuthData, initialStateUserDataType, logoutUserTC, setAuthUserData } from "redux/auth-reducer";
import { AppRootStateType } from "redux/store-redux";

type mapStateToPropsType = initialStateUserDataType & { isLoading: boolean };
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
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  isLoading: state.app.isLoading,
});

export default connect(mapStateToProps, {
  setAuthUserData,
  logoutUserTC,
})(HeaderContainer);
