import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes} from "../../redux/store";
import React, {useRef} from "react";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {DialogsDataType, MessagesDataType} from "../../redux/types";
import {StoreReduxType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


type DialogsContainerType = {
    store:StoreReduxType,
    /*newMessageText:string*/
}
export const DialogsContainer = (props: DialogsContainerType) => {
    let state = props.store.getState().dialogsPage

    const sendMessage = () => {
       props.store.dispatch(addMessageAC(state?.newMessageText))

    }
    let updateMessageBody = (text:string) => {
        props.store.dispatch(updateMessageAC(text))
    }
    return (<Dialogs
        updateMessageBody={updateMessageBody}
        sendMessage={sendMessage}
        dialogsPage={state}
        />)

}