import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' '+ s.active}>
                    <NavLink to="/dialogs/1">
                        Dima
                    </NavLink>
                    </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Veronika</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Viktoria</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Ivan</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Alex</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Roman</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Where are you?</div>
            </div>
        </div>

    )

}