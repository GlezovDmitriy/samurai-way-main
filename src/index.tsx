import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";


export const renderEntireTree = () => {
    ReactDOM.render(
        <App
            store={store}
            dispatch={store.dispatch.bind(store)}
            />,
        document.getElementById('root')
    );
}

renderEntireTree();
/*store.subscribe(renderEntireTree)*/
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree()
})
