export type UserType = {
    id: string
    photos: {
        small: string,
        large: string
    }
    followed: boolean
    name: string
    status: string
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

let initialState = {
    users: [] as Array<UserType>,
}

export const usersReducer = (state: initialStateUsersType = initialState, action: UsersActionTypes)
    : initialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u=> u.id===action.userId ? {...u, followed: true} : u)}
        case 'UN-FOLLOW':
            return {...state, users: state.users.map(u=> u.id===action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: action.users }
                // [...state.users, ...action.users]
        default:
            return state;
    }
}
