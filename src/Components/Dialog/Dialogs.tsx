import React from 'react';
import  s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



export  const Dialogs = () => {

    const DialogData = [{id:1,name:'Hróðgeirr'},
                        {id:2,name:'Eiríkr'},
                        {id:3,name:'Hróðgeirr'},
                        {id:4,name:'Egill'},
                        {id:5,name:'Styrr'}
    ]

    const MessageData = [{id:1,message:'Å slite og slepe for å få endene til å møtes'},
        {id:2,message:'Å være i den sjuende himmel'},
        {id:3,message:'Å drive dank'},
        {id:4,message:'Å dra ved nesa'},
        {id:5,message:'Å gjøre en mygg til en elefant'}]

    return ( <div className={s.items}>
            <div className={s.dialogs}>

                {DialogData.map((d)=>{ return (
                    <DialogItem name={d.name} id={d.id}/>
                )

                })}



            </div>
            <div>
                <div className={s.messages}>


                    {MessageData.map((m)=>{
                        return (
                            <Message message={m.message}/>
                        )
                    })}


                </div>

            </div>
        </div>

    );
};

