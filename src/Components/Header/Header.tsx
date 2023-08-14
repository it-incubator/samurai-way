import React from 'react';
import  s from './Header.module.css'
import flag from '../../image/flag.png';
import {NavLink} from "react-router-dom";

type HeaderType = {
    login:string
    isAuth:boolean
}


export const Header:React.FC<HeaderType> = ({login,isAuth,...props}) => {

    return (
        <div className={s.header}>
            <div className={s.style}>Iceland</div>
            <header ><img className={s.logo} src={flag}/></header>
            <div  className={s.item}>

                    {isAuth ?
                    login
                        :  <NavLink to='/login' activeClassName={s.activeLink} >Login</NavLink>}

            </div>

        </div>
    );
};

