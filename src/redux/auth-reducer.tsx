export type AuthData = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: AuthData) => {
    return {
        type: 'SET-USER-DATA', data
    } as const
}

let initialState: AuthData = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
export type initialStateUserDataType = typeof initialState

export const authReducer = (state: initialStateUserDataType = initialState, action: AuthActionTypes)
    : initialStateUserDataType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
