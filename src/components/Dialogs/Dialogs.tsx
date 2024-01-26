import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes} from "../../redux/store";
import React, {useRef} from "react";
import {addMessageAC} from "../../redux/dialogs-reducer";
import {DialogsDataType, MessagesDataType} from "../../redux/types";


type DialogsType = {
    dialogsData: DialogsDataType,
    messagesData: MessagesDataType,
    newMessageText: string,
    dispatch: (action: ActionsTypes) => void,
}
export const Dialogs = (props: DialogsType) => {
    let dialogElements = props.dialogsData
        .map((d) => {
                return (
                    <DialogItem id={d.id} name={d.name}/>
                )
            }
        )
    let messagesElements = props.messagesData
        .map((m) => {
            return (
                <Message id={m.id} message={m.message}/>
            )
        })
    let newMessage = useRef<HTMLTextAreaElement>(null)
    const addMessage = () => {
        if (newMessage.current !== null) {
            let text = newMessage.current.value
            props.dispatch(addMessageAC(props.newMessageText))
            props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: ''})
        }

    }
    let onMessageChange = () => {
        if (newMessage.current !== null) {
            let text = newMessage.current.value
            props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})
        }
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
                      value={props.newMessageText}
                      onChange={onMessageChange}
            />
            <button onClick={addMessage}
                    disabled={props.newMessageText == ''}>ADD MESSAGE
            </button>
        </div>

    )

}