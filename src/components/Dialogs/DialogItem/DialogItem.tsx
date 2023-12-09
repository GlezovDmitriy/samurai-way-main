import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'
import {DialogItemType} from "../Dialogs";




export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}






