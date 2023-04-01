import React from 'react';
import {UsersType} from "./UserContainer";

export const User = (props:UsersType) => {



    const onclickFollow =(id:number)=> {
        props.Follow(id)

    }

    const onclickUNFollow =(id:number)=> {
        props.UNFollow(id)

    }


    return (
        <div>
            {props.userReducer.users.map((el)=><li>{el.name}
                <div>
                    { el.fallow ?  <button onClick={()=>onclickUNFollow(el.id)}>UnFollow</button> :
                        <button onClick={()=>onclickFollow(el.id)}>Follow</button>}
                </div>


            </li>)}



        </div>
    );
};

