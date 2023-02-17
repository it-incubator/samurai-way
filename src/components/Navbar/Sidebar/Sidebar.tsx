import React from 'react';
import c from './Sidebar.module.css';
import {DialogItem} from '../../Dialogs/DialogItem/DialogItem';
import {SideBarFriendType, SideBarType} from '../../../redux/state';

type SideBarPropsType = {
    sidebar: SideBarType
}

export const Sidebar: React.FC<SideBarPropsType> = (props) => {

    const friendImg = <img
        src="https://sun9-west.userapi.com/sun9-61/s/v1/ig2/-PedHoA8muVC950fdeQvi-QEsyd8QlJ54iBwJgv13_P57703Fozbp7fjWcd8IWfi2XqrMnfQZY1ZG--2uH7pvLRU.jpg?size=100x100&quality=96&crop=0,1,1103,1103&ava=1"
        alt="ava"/>

    const friendsDataMap = props.sidebar.friends
        .map(el => <div key={el.id} className={c.sidebar_friends_item}>
            {friendImg}
            {el.name}
        </div>);

    return (
        <div className={c.sidebar}>
            <div className={c.sidebar_title}>
                <h2>Friends</h2>
            </div>
                <div className={c.sidebar_friends}>
                    {friendsDataMap}
                </div>
        </div>
    )
}