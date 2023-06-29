import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { AuthData, initialStateUserDataType, loginUserTC } from "../../redux/auth-reducer";
import c from "./Login.module.css";
import { FormControl } from "../common/FormsControls/FormsControls";
import { requiredField } from "../../utils/validations/validations";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppRootStateType } from "../../redux/store-redux";

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Input = FormControl("input");

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="firstName">Login (E-mail)</label>
        <Field type="text" component={Input} name="email" validate={[requiredField]} placeholder="email" />
      </div>
      <div>
        <label htmlFor="firstName">Password</label>
        <Field
          type="text"
          component={Input}
          name="password"
          validate={[requiredField]}
          placeholder="password"
        />
      </div>
      <div>
        <label htmlFor="firstName">remember me</label>
        <Field type="checkbox" component={Input} name="rememberMe" />
      </div>
      {props.error ? <div className={c.formSummaryError}>{props.error}</div> : ""}
      <div>
        <button type="submit">Login</button>
      </div>
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
