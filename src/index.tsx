import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {StoreContext} from "./StoreContext";
import {Provider} from "react-redux";


export const renderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App
                store={store}
                /* dispatch={store.dispatch.bind(store)}*/
            />
        </Provider>
        ,
        document.getElementById('root')
    );
}

renderEntireTree();
/*store.subscribe(renderEntireTree)*/
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree()
})
