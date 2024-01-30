
import {ActionsTypes} from "./store";
import {DialogsPageType} from "./types";

export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    /*newMessageText: string*/

}
export type UpdateMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: string,
}

let initialState = {
    dialogsData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Veronika"},
        {id: 3, name: "Viktoria"},
        {id: 4, name: "Ivan"},
        {id: 5, name: "Alex"},
        {id: 6, name: "Roman"},
    ],
    messagesData: [
        {id: 1, message: "HELLO!"},
        {id: 2, message: "HELLOeeee eeeeee!"},
        {id: 3, message: "HELLOwwwww wwww!"},
        {id: 4, message: "HELLOrrrrr rrrr!"},
    ],
    newMessageText: 'NEW-MESSAGE'
}
const dialogsReducer = (state:DialogsPageType = initialState, action:ActionsTypes) =>{
    switch (action.type){
        case 'ADD-MESSAGE':
            const newMessage = {
                id: state.messagesData.length + 1,
                /*message: action.newMessageText,*/
                message: state.newMessageText,
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
export const addMessageAC = (): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE',
        /*newMessageText: newMessageText*/

    } as const
}
export const updateMessageAC = (newText: string): UpdateMessageActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    } as const
}

export default dialogsReducer;