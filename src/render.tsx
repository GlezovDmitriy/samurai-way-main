import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost} from "./redux/state";

export const renderEntireTree = (state:any)=>{
    ReactDOM.render(
        <App
            state={state}
            postsData={state.profilePage.postsData}
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
            friends={state.sidebar.friends}
            addPost = {addPost}
            addMessage={addMessage}/>,
        document.getElementById('root')
    );
}
