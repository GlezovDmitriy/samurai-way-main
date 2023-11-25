import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name: string
}
type MessageType = {
    message: string
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Dima"} id={"1"}/>
                <DialogItem name={"Veronika"} id={"2"}/>
                <DialogItem name={"Viktoria"} id={"3"}/>
                <DialogItem name={"Ivan"} id={"4"}/>
                <DialogItem name={"Alex"} id={"5"}/>
                <DialogItem name={"Roman"} id={"6"}/>

            </div>
            <div className={s.messages}>
                <Message message={"HELLO!"}/>
                <Message message={"Where are you?"}/>
                <Message message={"Hi!!!"}/>
                <Message message={"Hi!!!"}/>
                <Message message={"Hi!!!"}/>
            </div>
        </div>

    )

}