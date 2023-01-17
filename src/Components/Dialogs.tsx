import React from 'react';
import  s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export  const Dialogs = () => {
    return ( <div className={s.items}>
            <div className={s.dialogs}>
                <div className={s.style}><NavLink to={'dialogs/1'}>Hróðgeirr</NavLink></div>
                <div className={s.style}><NavLink to={'dialogs/2'}>Eiríkr</NavLink></div>
                <div className={s.style}><NavLink to={'dialogs/3'}>Broddi </NavLink></div>
                <div className={s.style}><NavLink to={'dialogs/4'}>Egill</NavLink></div>
                <div className={s.style}><NavLink to={'dialogs/5'}>Styrr</NavLink></div>
            </div>
            <div>
                <div className={s.messages}>
                    <div className={s.style}>Å slite og slepe for å få endene til å møtes</div>
                    <div className={s.style}>Å være i den sjuende himmel</div>
                    <div className={s.style}>Å drive dank</div>
                    <div className={s.style}>Å dra ved nesa</div>
                    <div className={s.style}>Å gjøre en mygg til en elefant</div>

                </div>

            </div>
        </div>

    );
};

