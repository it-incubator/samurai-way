import {ItemsType} from "../API/User-api";


export type InitializationStateUserType = {
    users: ItemsType[]

}




const InitializationState:InitializationStateUserType = {
  users:[]

}



export  const userReducer= (state=InitializationState ,action:Follow|UNFollow|ADDUsers ):InitializationStateUserType => {

    switch (action.type) {

        // case 'Follow':
        //
        //
        //     return {...state, users:state.users.map((el)=>el.id===action.payload.id ? {...el,fallow:true }: el)}
        //
        // case 'UNFollow':
        //
        //
        //     return {...state, users:state.users.map((el)=>el.id===action.payload.id ? {...el,fallow:false }: el)}

        case 'ADD-USERS':



            return {...state,users:action.payload.users}




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

export  type  ADDUsers = ReturnType<typeof ADDUsersAC  >
export  const ADDUsersAC = (users:ItemsType[])=> {
    return {
        type:'ADD-USERS',
        payload :{
           users:users
        }

    } as const

}


