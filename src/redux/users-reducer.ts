import {ActionsTypes,} from "./store";

type LocationType = {
    city: string,
    country: string
}
type PhotosType = {
    small: string,
    large: string,
}
export type UserType = {
    id: number,
    photos:PhotosType,
    followed: boolean,
    name: string,
    status: string,
    //location: LocationType
}
export type UsersPropsType = {
    users: UserType[]
}
export type FollowActionType = {
    type: 'FOLLOW',
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW',
    userId: number
}
export  type SetUsersActionType={
    type: 'SET-USERS',
    users: UserType[]
}

let initialState: UsersPropsType = {
    users: [] as Array<UserType>,
}
export type InitialStateType = typeof initialState
export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':{
            let stateCopy = {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: true}
                    : u)
            }
            return stateCopy
        }

        case 'UNFOLLOW': {
            let stateCopy = {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: false}
                    : u)
            }
            return stateCopy
        }
            case 'SET-USERS':{
                return {...state, users: [...state.users, ...action.users]}
            }
        default:
            return state
    }
}
export const followAC = (userId: number): FollowActionType => {
    return {
        type: 'FOLLOW', userId: userId
    } as const
}
export const unfollowAC = (userId: number): UnfollowActionType => {
    return {
        type: 'UNFOLLOW', userId: userId
    } as const
}
export const setUsersAC = (users: UserType[]): SetUsersActionType => {
    return {
        type: 'SET-USERS', users: users
    } as const
}
