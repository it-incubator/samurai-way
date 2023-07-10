import {ItemsType} from "../API/User-api";


export type InitializationStateUserType = {
    users: ItemsType[]
    pageSize:number
    totalUsersCounter:number
    currentPage :number

}




const InitializationState:InitializationStateUserType = {
  users:[],
    pageSize:5,
    totalUsersCounter: 20,
    currentPage :1

}



export  const userReducer= (state=InitializationState ,action:Follow|UNFollow|ADDUsers|CurrentPageType|TotalUserCounterType ):InitializationStateUserType => {

    switch (action.type) {

        case 'Follow':


            return {...state, users:state.users.map((el)=>el.id===action.payload.id ? {...el,fallow:true }: el)}

        case 'UNFollow':


            return {...state, users:state.users.map((el)=>el.id===action.payload.id ? {...el,fallow:false }: el)}

        case 'ADD-USERS':



            return {...state,users:action.payload.users}

        case 'CURRENT-PAGE':



            return {...state,currentPage:action.payload.p}

        case 'TOTAL_USER_COUNT':



            return {...state,totalUsersCounter:action.payload.totalCount}




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

export  type  CurrentPageType = ReturnType<typeof CurrentPageAC>

export  const CurrentPageAC = (p:number)=> {
    return {
        type:'CURRENT-PAGE',
        payload :{
        p:p
        }

    } as const

}

export  type  TotalUserCounterType = ReturnType<typeof TotalUserCounterAC>

export  const TotalUserCounterAC = (totalCount:number)=> {
    return {
        type:'TOTAL_USER_COUNT',
        payload :{
            totalCount:totalCount
        }

    } as const

}




