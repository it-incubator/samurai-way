import React from 'react';
import  s from './Header.module.css'
import flag from '../../image/flag.png';
import {NavLink} from "react-router-dom";

type HeaderType = {
    authReducer:string
}


export const Header:React.FC<HeaderType> = ({authReducer}) => {

    return (
        <div className={s.header}>
            <div className={s.style}>Iceland</div>
            <header ><img className={s.logo} src={flag}/></header>
            <div  className={s.item}>

                    {authReducer ?
                    authReducer
                        :  <NavLink to='/login' activeClassName={s.activeLink} >Login</NavLink>}

            </div>

        </div>
    );
};

