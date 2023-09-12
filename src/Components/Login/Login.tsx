import React from 'react';
import s  from "./Login.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Redirect} from "react-router-dom";
import { maxLengthCreator, required} from "../../utils/validators/validators";
import FormControls from "../FormControls/FormControls";
import style from "../FormControls/FormControls.module.css";


export type FormDataType ={
    email:string
    password:string
    rememberMe:string
    captcha:string
}

type LoginType ={
    Authme:(formData:FormDataType)=>void
    isAuth:boolean

}

type CaptchaType = {
    captchaUrl:string|null
}

type LoginFormType = CaptchaType & LoginType



export const Login:React.FC<LoginFormType> = ({Authme,isAuth,captchaUrl,...props}) => {

const onSubmit=(formData:FormDataType)=> {

    Authme(formData)
}



if(isAuth){return <Redirect to={'./profile'}/>}

    return (
        <div className={s.style}>
           <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}  />
        </div>
    );
};



const maxLength = maxLengthCreator(20)



const LoginForm: React.FC<InjectedFormProps<FormDataType,CaptchaType> & CaptchaType > = ({captchaUrl,...props})=> {


    return (
        <div className={s.auth}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[required,maxLength]}  placeholder={'email'} name={'email'} component={FormControls}/>
                </div>
                <div>
                    <Field validate={[required]} placeholder={'password'} name={'password'}  type={'password'} component={FormControls}/>
                </div>
                <div>
                    <Field type={'checkbox'}  name={'rememberMe'} component={'input'}/>remember Me
                </div>
                {captchaUrl &&
                    <div>
                        <img src={captchaUrl}/>
                        <div>
                            <Field validate={[required]}  name={'captcha'} component={'input'}/>captcha
                        </div>

                    </div>

                }

                {
                    props.error &&
                        <div  className={style.error}>{props.error}</div>

                }

                <button>Send</button>
            </form>


        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType,CaptchaType>({form:'login'})(LoginForm)

