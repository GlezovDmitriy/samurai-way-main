import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";


export const renderEntireTree = () => {
    ReactDOM.render(
        <App
            store={store}
dispatch={store.dispatch.bind(store)}
            /*addPost={addPost}
            addMessage={addMessage}
            updateNewPostText={updateNewPostText}
            updateNewMessageText={updateNewMessageText}*//>,
        document.getElementById('root')
    );
}

renderEntireTree();
store.subscribe(renderEntireTree)