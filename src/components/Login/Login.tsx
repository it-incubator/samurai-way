import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { loginUserTC } from "redux/auth-reducer";
import c from "./Login.module.css";
import { createField, FormControl } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppRootStateType } from "redux/store-redux";

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Input = FormControl("input");

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, "text", "email", "Email")}
      {createField(Input, "password", "password", "Password")}
      {createField(Input, "checkbox", "rememberMe", "", "remember me", false)}
      {error ? <div className={c.formSummaryError}>{error}</div> : ""}
      <button type="submit">Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm);

const Login = (props: LoginContainerPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginUserTC(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />; // redirect
  }

  return (
    <div className={c.loginWrapper}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export type LoginContainerPropsType = mapDispatchToPropsType & mapStateToPropsType;
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  //data
  return {
    isAuth: state.auth.isAuth,
  };
};
type mapStateToPropsType = { isAuth: boolean };
type mapDispatchToPropsType = {
  loginUserTC: (email: string, password: string, rememberMe: boolean) => void;
};

export default connect(mapStateToProps, { loginUserTC })(Login);
