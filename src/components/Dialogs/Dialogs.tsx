import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsType = {
    DialogItemType: DialogItemType[]
    MessageType: MessageType[]
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
    id: number
}

export const Dialogs = (props: DialogsType) => {
    let dialogsData = [
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
    ]
    let dialogElements = dialogsData
        .map((d) => {
            return(
                <DialogItem id={d.id} name={d.name}/>
                )
            }
        )
    let messagesElements = messagesData
        .map((m) => {
            return(
                <Message id={m.id} message={m.message}/>
                )
        })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )

}