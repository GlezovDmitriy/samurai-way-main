import {ActionsTypes, } from "./store";
import {PostsDataType, PostType, ProfilePageType} from "./types";
export type AddPostActionType = {
    type: 'ADD-POST',
    /*newPostText: string,*/
}
export type UpdatePostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string,
}

let initialState =  {
    postsData: [
        {id: 1, message: "Hello, my friend!", likesCount: 6},
        {id: 2, message: "How are you?", likesCount: 3},
        {id: 3, message: "How ?", likesCount: 5},
        {id: 4, message: "you?", likesCount: 4},
    ] as Array<PostType>,
    newPostText: ''
}
export type InitialStateType = typeof initialState
const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType =>{
    switch (action.type){
        case 'ADD-POST':{
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 3
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }

        case 'UPDATE-NEW-POST-TEXT':{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }

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
export default profileReducer;