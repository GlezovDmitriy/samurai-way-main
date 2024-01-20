import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from "./redux/state";
import {addMessage, addPost, updateNewPostText, updateNewMessageText} from "./redux/state";

export const renderEntireTree = (state:any) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            addMessage={addMessage}
            updateNewPostText={updateNewPostText}
            updateNewMessageText={updateNewMessageText}/>,
        document.getElementById('root')
    );
}

renderEntireTree(state);
subscribe(renderEntireTree)