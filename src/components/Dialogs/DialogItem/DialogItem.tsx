import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

type DialogItemType = {
    id: number
    name: string
}
let dialogsData = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Veronika"},
    {id: 3, name: "Viktoria"},
    {id: 4, name: "Ivan"},
    {id: 5, name: "Alex"},
    {id: 6, name: "Roman"},
]

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    let dialogElements = dialogsData
        .map((dialog) => {
                <DialogItem name={dialog.name} id={dialog.id}/>
                console.log(dialog.name)
                console.log(dialog.id)
            }
        )
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}






