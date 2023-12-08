import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessageType = {
    message: string
    id: number
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
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
        .map((dialog) => {
                <DialogItem name={dialog.name} id={dialog.id}/>
            console.log(dialog.name)
            console.log(dialog.id)
            }
        )
    let messagesElements = messagesData.map((m) => {
            <Message id={m.id} message={m.message} />
        })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesData.map((m) => {
                    <Message id={m.id} message={m.message} />
                })}
            </div>
        </div>

    )

}