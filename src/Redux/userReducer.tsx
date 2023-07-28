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
    totalUsersCounter: 20,
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



            return {...state,currentPage:action.payload.page}

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

export  const CurrentPageAC = (page:number)=> {
    return {
        type:'CURRENT-PAGE',
        payload :{
        page:page
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


export const ThunkUser =(currentPage:number,pageSize:number) => (dispatch: Dispatch)=> {

    dispatch(ToglleIsFetchingAC(true))
    userAPI.getUser(currentPage, pageSize)
        .then((res) => {
            dispatch(ToglleIsFetchingAC(false))
            dispatch(ADDUsersAC(res.data.items));
            dispatch(TotalUserCounterAC(res.data.totalCount))

        })

}

export const ThunkChangePage =(pageNumber:number,pageSize:number) => (dispatch:Dispatch)=> {


    dispatch(ToglleIsFetchingAC(true))
    dispatch(CurrentPageAC(pageNumber))

    userAPI.getChangePageUser(pageNumber, pageSize)
        .then((res) => {
            dispatch(ToglleIsFetchingAC(false))
            dispatch(ADDUsersAC(res.data.items));

        })
}

export const ThunkFollow = (userId:number) => (dispatch:Dispatch)=>{
    dispatch(DisabledAC({id:userId,disableButton:true}))
    userAPI.Follow(userId)

        .then((res) => {
           dispatch(FollowAC(userId))
            dispatch(DisabledAC({id:userId,disableButton:false}))

        })
}

export const ThunkUNFollow = (userId:number) => (dispatch:Dispatch)=>{
    dispatch(DisabledAC({id:userId,disableButton:true}))
    userAPI.UNFollow(userId)

        .then((res) => {
            dispatch(UNFollowAC(userId))
            dispatch(DisabledAC({id:userId,disableButton:false}))

        })
}


