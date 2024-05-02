import {ActionsTypes,} from "./store";


export type AuthPropsType = {
    id: number | null
    email: string | null
    login: string |null
    //isFetching: boolean
}
export type SetUserDataActionType = {
    type: 'SET_USER_DATA',
    data:{
        id: number | null
        email: string | null
        login: string |null

    }
}

const SET_USER_DATA = 'SET_USER_DATA'


let initialState: AuthPropsType = {
    id: null,
    email: null,
    login:null,
    //isFetching: false
}
export type InitialStateType = typeof initialState
export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }
        default:
            return state
    }
}
export const setUserDataAC = (id:number, email:string, login: string): SetUserDataActionType => {
    return {
        type: SET_USER_DATA, data:{id, email, login}
    } as const
}
