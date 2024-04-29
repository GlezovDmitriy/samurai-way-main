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
    photos: PhotosType,
    followed: boolean,
    name: string,
    status: string,
    //location: LocationType
}
export type UsersPropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
export type FollowActionType = {
    type: 'FOLLOW',
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW',
    userId: number
}
export  type SetUsersActionType = {
    type: 'SET-USERS',
    users: UserType[]
}
export  type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE',
    currentPage:number
}
export  type SetTotalUsersCountActionType = {
    type: 'SET-TOTAL-USERS-COUNT',
    totalCount:number
}
export  type isFetchingActionType = {
    type: 'IS-FETCHING',
    isFetching: boolean
}

let initialState: UsersPropsType = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
export type InitialStateType = typeof initialState
export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
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
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount:action.totalCount}
        }
        case 'IS-FETCHING': {
            return {...state,  isFetching:action.isFetching}
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
export  const setCurrentPageAC = (currentPage: number):SetCurrentPageActionType=>{
    return {
        type: "SET-CURRENT-PAGE", currentPage
    }
}
export  const setTotalUsersCountAC = (totalCount: number):SetTotalUsersCountActionType=>{
    return {
        type: "SET-TOTAL-USERS-COUNT", totalCount
    }
}
export  const setIsFetchingAC = (isFetching: boolean):isFetchingActionType=> {
    return {
        type: "IS-FETCHING", isFetching
    }
}