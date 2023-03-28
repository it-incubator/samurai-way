import {v1} from 'uuid';

export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
}

export type UsersActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>
export type initialStateUsersType = typeof initialState
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW', userId
    } as const
}
export const unFollowAC = (userId: string) => {
    return {
        type: 'UN-FOLLOW', userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS', users
    } as const
}

const userAva= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtwg-rhAwzjFo4QCCnMee3Y_fdi9ETH16ag&usqp=CAU"
let initialState = {
    users: [
        // {id: v1(), photoUrl: userAva,followed: true, fullName: 'Dmitry K', status: 'Searching job', location: {country: 'Russia', city: 'Perm'} },
        // {id: v1(), photoUrl: userAva,followed: false, fullName: 'Aleks L', status: 'Looking for sport', location: {country: 'Russia', city: 'Moscow'} },
        // {id: v1(), photoUrl: userAva,followed: false, fullName: 'Kolya T', status: 'I am GRUT', location: {country: 'Russia', city: 'Ekaterinburg'} },
        // {id: v1(), photoUrl: userAva,followed: true, fullName: 'Artem P', status: 'Good day!', location: {country: 'Russia', city: 'Sankt-Petersburg'} },
    ] as Array<UserType>,
}

export const usersReducer = (state: initialStateUsersType = initialState, action: UsersActionTypes)
    : initialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u=> u.id===action.userId ? {...u, followed: true} : u)}
        case 'UN-FOLLOW':
            return {...state, users: state.users.map(u=> u.id===action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]} 
        default:
            return state;
    }
}
