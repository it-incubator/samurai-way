import React from 'react';
import styles from './Navbar.module.css'

/*type styleType = {
    nav: string,
    item: string,
    item active: string
}*/


export const Nav = () =>{
    return(
        <nav className={styles.nav}>
            <a href="src/components/Navbar/Navbar#" className={`${styles.item} + ${styles.active}`}>Profile</a>
            <a href="src/components/Navbar/Navbar#" className={styles.item}>Message</a>
            <a href="src/components/Navbar/Navbar#" className={styles.item}>News</a>
            <a href="src/components/Navbar/Navbar#" className={styles.item}> Music</a>
            <a href="src/components/Navbar/Navbar#" className={styles.item}>Settings</a>
        </nav>
    )
}