import React from "react";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType, StoreReduxType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../../redux/types";
import {Dispatch} from "redux";



type DialogsContainerType = {
    store:StoreReduxType,
}
/*export const DialogsContainer = (props: DialogsContainerType) => {
    let state = props.store.getState().dialogsPage

    const sendMessage = () => {
       props.store.dispatch(addMessageAC())

    }
    let updateMessageBody = (text:string) => {
        props.store.dispatch(updateMessageAC(text))
    }
    return (<Dialogs
        updateMessageBody={updateMessageBody}
        sendMessage={sendMessage}
        dialogsPage={state}
        />)

}*/
type MapStateType = {
    dialogsPage:DialogsPageType
}
type MapDispatchPropsType={
    updateMessageBody:(text:string)=>void,
    sendMessage:()=>void
}
export type DialogsPropsType = MapStateType & MapDispatchPropsType
let mapStateToProps =(state:AppStateType):MapStateType=> {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps =(dispatch:Dispatch):MapDispatchPropsType=> {
    return{
        updateMessageBody:(text:string)=>{dispatch(updateMessageAC(text))},
        sendMessage:()=>{dispatch(addMessageAC())}
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs )