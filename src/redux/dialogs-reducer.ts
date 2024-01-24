import profileReducer from "./profile-reducer";
import {ActionsTypes, DialogsPageType} from "./state";

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

export default dialogsReducer;