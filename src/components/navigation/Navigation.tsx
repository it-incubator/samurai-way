import style from './navigation.module.css'

export const Navigation = () => {
    return(
        <nav className={style.nav}>
        <ul className={style.nav__list}>
          <li className={style.nav__list_item}><a href="#">Profile</a></li>
          <li className={style.nav__list_item}><a href="#">Messages</a></li>
          <li className={style.nav__list_item}><a href="#">News</a></li>
          <li className={style.nav__list_item}><a href="#">Music</a></li>
          <li className={style.nav__list_item}><a href="#">Setting</a></li>
        </ul>
      </nav>
    )
}