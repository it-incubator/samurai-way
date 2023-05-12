import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {loginUserTC} from '../../redux/auth-reducer';
import c from './Login.module.css';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="firstName">Login (E-mail)</label>
                <Field type="text" component="input" name="email"/>
            </div>
            <div>
                <label htmlFor="firstName">Password</label>
                <Field type="text" component="input" name="password"/>
            </div>
            <div>
                <label htmlFor="firstName">remember me</label>
                <Field type="checkbox" component="input" name="rememberMe"/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
       loginUserTC(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div className={c.loginWrapper}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};




