import profileReducer from "./profile-reducer";
import {ActionsTypes, DialogsPageType} from "./state";

const dialogsReducer = (state:DialogsPageType, action:ActionsTypes) =>{
 if (action.type === 'ADD-MESSAGE') {
        const newMessage = {
            id: state.messagesData.length + 1,
            message: action.newMessageText,
        }
        state.messagesData.push(newMessage)
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newText
    }
    return state
}

export default dialogsReducer;