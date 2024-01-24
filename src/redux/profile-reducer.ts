import {ActionsTypes, ProfilePageType} from "./state";

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
export default profileReducer;