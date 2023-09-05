import {ItemsType, userAPI} from "../API/User-api";
import {Dispatch} from "redux";


export type InitializationStateUserType = {
    users: ItemsType[]
    pageSize:number
    totalUsersCounter:number
    currentPage :number
    isFetching:boolean
    disable:DisableType

}

export type DisableType= {
    id:number
    disableButton:boolean
}



const InitializationState:InitializationStateUserType = {
  users:[

  ],
    pageSize:5,
    totalUsersCounter: 1,
    currentPage :1,
    isFetching:false,
    disable:{id:1,disableButton:false}

}



export  const userReducer= (state=InitializationState ,action:TsarType ):InitializationStateUserType => {

    switch (action.type) {

        case 'Follow':


            return {...state, users:state.users.map((el)=>el.id===action.payload.id ? {...el,followed:true }: el)}

        case 'UNFollow':


            return {...state, users:state.users.map((el)=>el.id===action.payload.id ? {...el,followed:false }: el)}

        case 'ADD-USERS':



            return {...state,users:action.payload.users}

        case 'CURRENT-PAGE':

            return {...state,currentPage:action.payload.currentPage}

        case 'TOTAL_USER_COUNT':

            return {...state,totalUsersCounter:action.payload.totalCount}


        case 'TOGLLE_IS_FETCHING':

            return {...state,isFetching:action.payload.preloader}

        case 'DISABLE':


            return {...state, disable:{...state.disable,id:action.payload.disabled.id,disableButton:action.payload.disabled.disableButton}}




        default :return state
    }
}

type TsarType = Follow|UNFollow|ADDUsers|CurrentPageType|TotalUserCounterType|ToglleIsFetchingType|DisabledType

export  type  Follow = ReturnType<typeof FollowAC >


export  const FollowAC = (id:number)=> {
    return {
        type:'Follow',
        payload :{
           id:id,

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

export  const CurrentPageAC = (currentPage:number)=> {
    return {
        type:'CURRENT-PAGE',
        payload :{
       currentPage
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

export  type  ToglleIsFetchingType = ReturnType<typeof  ToglleIsFetchingAC>

export  const  ToglleIsFetchingAC = (preloader:boolean)=> {
    return {
        type:'TOGLLE_IS_FETCHING',
        payload :{
           preloader:preloader
        }

    } as const

}

export  type  DisabledType = ReturnType<typeof  DisabledAC>

export  const  DisabledAC = ( disabled: DisableType)=> {
    return {
        type:'DISABLE',
        payload :{

           disabled
        }

    } as const

}


export const ThunkUser =(currentPage:number,pageSize:number) =>async (dispatch: Dispatch)=> {

    dispatch(ToglleIsFetchingAC(true))
    const response = await userAPI.getUser(currentPage, pageSize)

            dispatch(ToglleIsFetchingAC(false))
            dispatch(TotalUserCounterAC(response.data.totalCount))
            dispatch(ADDUsersAC(response.data.items));




}

export const ThunkChangePage =(p:number,pageSize:number) => async (dispatch:Dispatch)=> {


    dispatch(ToglleIsFetchingAC(true))
    dispatch(CurrentPageAC(p))

    const response = await userAPI.getChangePageUser(p, pageSize)

            dispatch(ToglleIsFetchingAC(false))
            dispatch(ADDUsersAC(response.data.items));
            console.log( p)



}

export const ThunkFollow = (userId:number) => async (dispatch:Dispatch)=>{
    dispatch(DisabledAC({id:userId,disableButton:true}))
    const response = await  userAPI.Follow(userId)


           dispatch(FollowAC(userId))
            dispatch(DisabledAC({id:userId,disableButton:false}))


}

export const ThunkUNFollow = (userId:number) => async (dispatch:Dispatch)=>{
    dispatch(DisabledAC({id:userId,disableButton:true}))
    const response = await userAPI.UNFollow(userId)


            dispatch(UNFollowAC(userId))
            dispatch(DisabledAC({id:userId,disableButton:false}))


}


