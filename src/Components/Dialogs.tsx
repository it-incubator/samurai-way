import React from 'react';
import  s from './Dialogs.module.css'

export  const Dialogs = () => {
    return ( <div className={s.items}>
            <div className={s.dialogs}>
                <div className={s.style}>Hróðgeirr</div>
                <div className={s.style}>Eiríkr</div>
                <div className={s.style}>Broddi </div>
                <div className={s.style}>Egill</div>
                <div className={s.style}>Styrr</div>
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

