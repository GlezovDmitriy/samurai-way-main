import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes} from "../../redux/store";
import React, {ChangeEvent, useRef} from "react";
import {addMessageAC} from "../../redux/dialogs-reducer";
import {DialogsDataType, DialogsPageType, MessagesDataType} from "../../redux/types";


type DialogsType = {
    updateMessageBody: (text: string) => void
    sendMessage: () => void
    /*dialogsData: DialogsDataType,
    messagesData: MessagesDataType,
    newMessageText: string,*/
    dialogsPage: DialogsPageType

}
export const Dialogs = (props: DialogsType) => {
    let state = props.dialogsPage
    let dialogElements = state.dialogsData
        .map((d) => {
                return (
                    <DialogItem id={d.id} name={d.name}/>
                )
            }
        )
    let messagesElements = state.messagesData
        .map((m) => {
            return (
                <Message id={m.id} message={m.message}/>
            )
        })
    let newMessage = useRef<HTMLTextAreaElement>(null)
    let addMessage = () => {
        props.sendMessage()
        state.newMessageText = ''
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        props.updateMessageBody(text)

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessage}
                      value={state.newMessageText}
                      onChange={onMessageChange}
            />
            <button onClick={addMessage}
                    disabled={state.newMessageText == ''}>ADD MESSAGE
            </button>
        </div>

    )

}