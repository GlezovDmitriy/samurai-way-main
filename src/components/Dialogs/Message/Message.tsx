import s from './../Dialogs.module.css'
import {MessageType} from "../Dialogs";



export const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


