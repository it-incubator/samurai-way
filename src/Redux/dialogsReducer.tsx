

export type InitializationStateDialogType = {
    data:DataType []
    message:MessageType[]
}

type DataType = {
    id:number;
    name:string

}

type MessageType = {
    id:number,
    message:string
}


const InitializationState:InitializationStateDialogType = {
    data:[{id:1,name:'Hróðgeirr'},
        {id:2,name:'Eiríkr'},
        {id:3,name:'Hróðgeirr'},
        {id:4,name:'Egill'},
        {id:5,name:'Styrr'}
    ],
    message :[{id:1,message:'Å slite og slepe for å få endene til å møtes'},
        {id:2,message:'Å være i den sjuende himmel'},
        {id:3,message:'Å drive dank'},
        {id:4,message:'Å dra ved nesa'},
        {id:5,message:'Å gjøre en mygg til en elefant'}]

}



export  const dialogsReducer= (state=InitializationState ,action:AddPostDialogs) => {

    switch (action.type) {
        case 'AddPostDialogs': {
            let newPost ={id:6,message:action.newDialogs}
            state.message.push(newPost)
            break
        }


        default :return state
    }
}

export  type  AddPostDialogs = ReturnType<typeof AddPostDialogsActionCreator>


export  const AddPostDialogsActionCreator = (newDialogs:string)=> {
    return {
        type:'AddPostDialogs',
        newDialogs: newDialogs
    } as const

}
