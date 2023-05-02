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

export type UsersActionTypes = ReturnType<typeof follow>
                                | ReturnType<typeof unFollow>
                                | ReturnType<typeof setUsers>
                                | ReturnType<typeof setCurrentPage>
                                | ReturnType<typeof setTotalUsersCount>
                                | ReturnType<typeof setIsFetching>
                                | ReturnType<typeof setFollowingProgress>

export const follow = (userId: string) => {
    return {
        type: 'FOLLOW', userId
    } as const
}
export const unFollow = (userId: string) => {
    return {
        type: 'UN-FOLLOW', userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export const setCurrentPage = (clickedPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE', clickedPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT', totalCount
    } as const
}
export const setIsFetching = (fetchingValue: boolean) => {
    return {
        type: 'TOGGLE-ISFETCHING', fetchingValue
    } as const
}
export const setFollowingProgress = (fetchingValue: boolean) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS', fetchingValue
    } as const
}

let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 5,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingProgress: false
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
        case 'TOGGLE-ISFETCHING':
            return {...state, isFetching: action.fetchingValue}
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {...state, followingProgress: action.fetchingValue}
        default:
            return state;
    }
}
