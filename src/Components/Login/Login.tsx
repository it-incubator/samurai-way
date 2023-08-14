import React from 'react';
import s  from "./Login.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType ={
    email:string
    password:string
    rememberMe:string
}

type LoginType ={
    Authme:(formData:FormDataType)=>void
}

export const Login:React.FC<LoginType> = ({Authme,...props}) => {

const onSubmit=(formData:FormDataType)=> {

    Authme(formData)


}
    return (
        <div className={s.style}>
           <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props)=> {

    return (
        <div className={s.auth}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={'email'} name={'email'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'}  name={'rememberMe'} component={'input'}/>remember Me
                </div>

                <button >Send</button>
            </form>


        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)

