import {ActionsTypes,} from "./store";

export type AuthPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type SetUserDataActionType = {
    type: 'SET_USER_DATA',
    data: AuthPropsType
}

const SET_USER_DATA = 'SET_USER_DATA'


let initialState: AuthPropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export type InitialStateType = typeof initialState
export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const setUserDataAC = (id: number, email: string, login: string, isAuth:boolean): SetUserDataActionType => {
    return {
        type: SET_USER_DATA, data: {id, email, login, isAuth}
    } as const
}
