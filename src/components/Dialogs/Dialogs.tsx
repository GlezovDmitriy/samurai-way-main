import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}> Dima</div>
                <div className={s.dialog}> Veronika</div>
                <div className={s.dialog}> Viktoria</div>
                <div className={s.dialog}> Ivan</div>
                <div className={s.dialog}> Alex</div>
                <div className={s.dialog}> Roman</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Where are you?</div>
            </div>
        </div>

    )

}