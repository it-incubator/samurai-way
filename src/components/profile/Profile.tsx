import {MyPosts} from './myPosts/MyPosts'

import style from './profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Content = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    )
}