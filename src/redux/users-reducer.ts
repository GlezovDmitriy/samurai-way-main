import {ActionsTypes, } from "./store";
import {PostsDataType, PostType, ProfilePageType} from "./types";
type LocationType = {
    city: string,
    country: string
}
export type UserType ={
    id: number,
    fullName: string,
    status:string,
    location: LocationType
}
export type UsersPropsType ={
    users: UserType[]
}
export type AddPostActionType = {
    type: 'ADD-POST',
    /*newPostText: string,*/
}
export type UpdatePostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string,
}

let initialState : UsersPropsType =  {
    users: [
        {id: 1, fullName: "Dmitriy", status:'Boss', location:{city: 'Minsk', country: 'Belarus'}},
        {id: 2, fullName: "Sasha", status:'Boss too', location:{city: 'Moskow', country: 'Russia'}},
        {id: 3, fullName: "Andrew", status:'Boss too', location:{city: 'Kiev', country: 'Ukraine'}},


    ] as Array<UserType>,
}
export type InitialStateType = typeof initialState
export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType =>{
    switch (action.type){

        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => {
    return {
        type: 'ADD-POST',
        /*newPostText: newPostText*/
    } as const
}
export const updatePostAC = (newText: string): UpdatePostActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
