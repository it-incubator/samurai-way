import React from 'react';
import {SideData} from "../../App";


type SideType = {
    SideData:SideData[]
}


export  const SideBar = (props:SideType) => {
    return (
        <div>
            {props.SideData.map((s)=>{
                return(
                    <li>
                        {s.name}
                    </li>
                )
            })}
        </div>
    );
};

