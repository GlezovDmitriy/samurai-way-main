import {ActionsTypes, } from "./store";
import {ProfilePageType} from "./types";
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
    ],
    newPostText: ''
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) =>{
    switch (action.type){
        case 'ADD-POST':
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 3
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
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