import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}
export const Dialog = (props: DialogPropsType) => {
    const {name, id} = props
    const path = '/dialogs/' + id
    return (
        <li className={style.item}><NavLink to={path} activeClassName={style.active}>{name}</NavLink></li>
    )
}