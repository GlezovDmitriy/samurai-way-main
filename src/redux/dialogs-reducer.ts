
import {ActionsTypes, DialogsPageType} from "./state";

export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    newMessageText: string
}
export type UpdateMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: string,
}
const dialogsReducer = (state:DialogsPageType, action:ActionsTypes) =>{
    switch (action.type){
        case 'ADD-MESSAGE':
            const newMessage = {
                id: state.messagesData.length + 1,
                message: action.newMessageText,
            }
            state.messagesData.push(newMessage)
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}
export const addMessageAC = (newMessageText: string): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE',
        newMessageText: newMessageText
    } as const
}
export const updateMessageAC = (newText: string): UpdateMessageActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    } as const
}

export default dialogsReducer;