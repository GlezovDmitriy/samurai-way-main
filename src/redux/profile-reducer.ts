import {ActionsTypes, ProfilePageType,} from "./state";
export type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string,
}
export type UpdatePostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string,
}
const profileReducer = (state: ProfilePageType , action: ActionsTypes) =>{
    switch (action.type){
        case 'ADD-POST':
            const newPost = {
                id: 5,
                message: action.newPostText,
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
export const addPostAC = (newPostText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const updatePostAC = (newText: string): UpdatePostActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export default profileReducer;