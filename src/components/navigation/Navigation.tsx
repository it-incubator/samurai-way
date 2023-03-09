import style from './navigation.module.css'
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return(
        <nav className={style.nav}>
        <ul className={style.nav__list}>
          <li className={style.nav__list_item }><NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink></li>
          <li className={style.nav__list_item}><NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink></li>
          <li className={style.nav__list_item}><NavLink to="/news" activeClassName={style.activeLink}>News</NavLink></li>
          <li className={style.nav__list_item}><NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink></li>
          <li className={style.nav__list_item}><NavLink to="/setting" activeClassName={style.activeLink}>Setting</NavLink></li>
        </ul>
      </nav>
    )
}