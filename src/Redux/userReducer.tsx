

export type InitializationStateUserType = {
    users:UsersProperty []

}

type UsersProperty = {
    id:number
    fallow:boolean
    name:string
    age:number
}


const InitializationState:InitializationStateUserType = {
  users:[{id:1,fallow:true, name:'Dima', age:18},
      {id:2,fallow:false,name:'Vitua',age:19},
      {id:3,fallow:false,name:'Sveta',age:19}]

}



export  const userReducer= (state=InitializationState ,action:Follow|UNFollow ):InitializationStateUserType => {

    switch (action.type) {

        case 'Follow':


            return {...state, users:state.users.map((el)=>el.id===action.payload.id ? {...el,fallow:true }: el)}

        case 'UNFollow':


            return {...state, users:state.users.map((el)=>el.id===action.payload.id ? {...el,fallow:false }: el)}




        default :return state
    }
}

export  type  Follow = ReturnType<typeof FollowAC >


export  const FollowAC = (id:number)=> {
    return {
        type:'Follow',
        payload :{
           id:id
        }

    } as const

}

export  type  UNFollow = ReturnType<typeof UNFollowAC >


export  const UNFollowAC = (id:number)=> {
    return {
        type:'UNFollow',
        payload :{
            id:id
        }

    } as const

}

