
import {ActionsTypes} from "./store";
import {DialogsPageType, DialogType, MessageType} from "./types";

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
    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: "HELLO!"},
        {id: 2, message: "HELLOeeee eeeeee!"},
        {id: 3, message: "HELLOwwwww wwww!"},
        {id: 4, message: "HELLOrrrrr rrrr!"},
    ] as Array<MessageType>,
    newMessageText: 'NEW-MESSAGE'
}
export type InitialStateType = typeof initialState
const dialogsReducer = (state:InitialStateType = initialState, action:ActionsTypes): InitialStateType=>{
    //let stateCopy = {...state, messagesData:[...state.messagesData]}

    switch (action.type){
        case 'ADD-MESSAGE':
            const newMessage = {
                id: state.messagesData.length + 1,
                /*message: action.newMessageText,*/
                message: state.newMessageText,
            }
            /*stateCopy = {...state,
            newMessageText: '',
            messagesData: [...state.messagesData, newMessage]}*/
           /* stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage)
            stateCopy.newMessageText = ''*/
            return {...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]}


        case 'UPDATE-NEW-MESSAGE-TEXT':{
            /*let stateCopy = {...state}
            stateCopy.newMessageText = action.newText*/
           /* stateCopy = {...state,                    // сразу пишем в return, без переменной stateCopy
            newMessageText: action.newText}*/
            return {...state,
                newMessageText: action.newText}
        }

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