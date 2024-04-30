import {ActionsTypes,} from "./store";
import {PostsDataType, PostType, ProfilePageType} from "./types";
import {ContactsType, ProfileType} from "../components/Profile/Profile";

export type AddPostActionType = {
    type: 'ADD-POST',
    /*newPostText: string,*/
}
export type UpdatePostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string,
}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE',
    profile: ProfileType,
}

let initialState = {
    postsData: [
        {id: 1, message: "Hello, my friend!", likesCount: 6},
        {id: 2, message: "How are you?", likesCount: 3},
        {id: 3, message: "How ?", likesCount: 5},
        {id: 4, message: "you?", likesCount: 4},
    ] as Array<PostType>,
    newPostText: '',
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: 'required(string)',
        contacts: {
            github: 'required(string)',
            vk: 'required(string)',
            facebook: 'required(string)',
            instagram: 'required(string)',
            twitter: 'required(string)',
            website: 'required(string)',
            youtube: 'required(string)',
            mainLink: 'required(string)',
        },
        photos: {
            small: '(string)',
            large: '(string'
        },

    }
}
//export type InitialStateType = typeof initialState
export type InitialStateType = {
    postsData: Array<PostType>
    newPostText: string
    profile: ProfileType
}
const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 3
            }
            /*let stateCopy = {...state,
                postsData: [...state.postsData, newPost],
            newPostText: ''}*/
            /*stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''*/
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }

        case 'UPDATE-NEW-POST-TEXT': {
            /*let stateCopy = {...state,
            newPostText: action.newText}
            stateCopy.newPostText = action.newText*/
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
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
export const setUserProfileAC = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}
export default profileReducer;