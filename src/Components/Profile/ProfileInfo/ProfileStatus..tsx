import React, {ChangeEvent, useState} from 'react';
import s from "../MyPost/MyPost.module.css";


type ProfileStatusType = {
    changeStatusCallback:(e:string)=>void
    status:string
}


export const ProfileStatus:React.FC<ProfileStatusType> = ({status,changeStatusCallback,...props}) => {


    const [editMode,setEditMode]=useState(false)

    const changeStatus =(e:ChangeEvent<HTMLInputElement>)=> {
        changeStatusCallback(e.currentTarget.value)
    }

    const changeEditMode =()=> {
        setEditMode(!editMode)
    }

    return (
        <div className={s.style}>
            {editMode
                ?  <input onBlur={changeEditMode}  onChange={changeStatus} autoFocus/>
                : <span onDoubleClick={changeEditMode}>{status}</span>}


        </div>
    );
};

