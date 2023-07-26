import React, {ChangeEvent, useState} from 'react';
import s  from "./Login.module.css"

type AuthType ={
    addAuth:(email:string,login:string)=>void
    authReducer:string
}


export const Login:React.FC<AuthType> = ({addAuth,authReducer,...props}) => {

    const [email,setEmail]=useState('')
    const [login,setLogin]=useState('')

    const Email = (event:ChangeEvent<HTMLInputElement>)=> {
        setEmail(event.currentTarget.value)
    }

    const Login = (event:ChangeEvent<HTMLInputElement>)=> {
        setLogin(event.currentTarget.value)
    }

    const AddAuth =()=> {
        addAuth(email,login)
    }

    return (
        <div className={s.style}>
            <div className={s.auth}>
                <div>
                    <input onChange={Email}/> email
                </div>
                <div>
                    <input onChange={Login}/> login
                </div>

                <button onClick={AddAuth}>Send</button>

            </div>


        </div>
    );
};

