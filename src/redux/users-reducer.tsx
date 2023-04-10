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

export type UsersActionTypes = ReturnType<typeof followAC>
                                | ReturnType<typeof unFollowAC>
                                | ReturnType<typeof setUsersAC>
                                | ReturnType<typeof setCurrentPageAC>
                                | ReturnType<typeof setTotalUsersCountAC>

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
export const setCurrentPageAC = (clickedPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE', clickedPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT', totalCount
    } as const
}

let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 5,
    pageSize: 5,
    currentPage: 1
}
export type initialStateUsersType = typeof initialState

export const usersReducer = (state: initialStateUsersType = initialState, action: UsersActionTypes)
    : initialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u=> u.id===action.userId ? {...u, followed: true} : u)}
        case 'UN-FOLLOW':
            return {...state, users: state.users.map(u=> u.id===action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: action.users }
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.clickedPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state;
    }
}
