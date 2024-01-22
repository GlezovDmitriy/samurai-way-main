import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import state, {ActionsTypes, DialogsDataType, MessagesDataType} from "../../redux/state";
import React, {useRef} from "react";


type DialogsType = {
    dialogsData: DialogsDataType,
    messagesData: MessagesDataType,
    /*addMessage:(message:string)=>void,*/
    newMessageText:string,
    /*updateNewMessageText:(text:string)=>void*/
    dispatch:(action:ActionsTypes)=>void,
}
/*export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
    id: number
}*/

export const Dialogs = (props: DialogsType) => {
    /* let dialogsData = [
         {id: 1, name: "Dima"},
         {id: 2, name: "Veronika"},
         {id: 3, name: "Viktoria"},
         {id: 4, name: "Ivan"},
         {id: 5, name: "Alex"},
         {id: 6, name: "Roman"},
     ]
     let messagesData = [
         {id: 1, message: "HELLO!"},
         {id: 2, message: "HELLOeeee eeeeee!"},
         {id: 3, message: "HELLOwwwww wwww!"},
         {id: 4, message: "HELLOrrrrr rrrr!"},
     ]*/
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
    const addMessage = ()=>{

        if (newMessage.current!== null){
            let text = newMessage.current.value
            props.dispatch({type:'ADD-MESSAGE', newMessageText:text})
            props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText:''})
        }

    }
    let onMessageChange=()=>{
        if (newMessage.current!== null){
            let text = newMessage.current.value
            props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText:text})
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
            disabled={props.newMessageText ==''}>ADD MESSAGE</button>
        </div>

    )

}