import React from 'react';
import {Nav} from './Navbar/Navbar';
import styles from './Header.module.scss';

export const Header = () => {
    return(
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Playstation_logo_colour.svg" alt="logo"/>
            <Nav/>
        </header>
    )
}