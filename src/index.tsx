import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addPost} from "./redux/state";
/*export type PostType = {
    message: string
    id: number
    likesCount: number
}
export type PostsDataType = PostType[]
export type DialogType = {
    id: number,
    name: string
}
export type DialogsDataType = DialogType[]
export type MessageType ={
    id: number,
    message: string
}
export type MessagesDataType = MessageType[]
let postsData:PostsDataType = [
    {id: 1, message: "Hello, my friend!", likesCount: 6},
    {id: 2, message: "How are you?", likesCount: 3},
    {id: 3, message: "How ?", likesCount: 5},
    {id: 4, message: "you?", likesCount: 4},
]
let dialogsData:DialogsDataType = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Veronika"},
    {id: 3, name: "Viktoria"},
    {id: 4, name: "Ivan"},
    {id: 5, name: "Alex"},
    {id: 6, name: "Roman"},
]
let messagesData:MessagesDataType = [
    {id: 1, message: "HELLO!"},
    {id: 2, message: "HELLOeeee eeeeee!"},
    {id: 3, message: "HELLOwwwww wwww!"},
    {id: 4, message: "HELLOrrrrr rrrr!"},
]*/
type AppType = {
    addPost:(postMessage:string)=> void,
    addMessage:(message:string)=>void,
}
//addPost('uuuuuu')
ReactDOM.render(
    <App
        postsData={state.profilePage.postsData}
        dialogsData={state.dialogsPage.dialogsData}
        messagesData={state.dialogsPage.messagesData}
        friends={state.sidebar.friends}
    addPost = {addPost}
    addMessage={addMessage}/>,
    document.getElementById('root')
);