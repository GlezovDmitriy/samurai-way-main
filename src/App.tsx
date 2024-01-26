import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import './components/Header/Header.module.css';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";
import {ActionsTypes} from "./redux/store";
import {MyFriends} from "./components/Friends/MyFriends";
import {StoreReduxType} from "./redux/redux-store";

type AppType = {
    store:StoreReduxType,
}

function App(props: AppType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/* <Profile/>*/}
                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs'
                        //component={Dialogs dialogsData = {props.dialogsData}}/>
                           render={() =>
                               <Dialogs dialogsData={state.dialogsPage.dialogsData}
                                        messagesData={state.dialogsPage.messagesData}
                                        /*addMessage={props.store.addMessage.bind(props.store)}
                                        updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}*/
                                        dispatch={props.store.dispatch.bind(props.store)}
                                        newMessageText={state.dialogsPage.newMessageText}
                               />
                           }
                    />
                    {/*render={()=> <Dialogs DialogItemType={} MessageType={}/>}*/}
                    <Route path='/profile'
                        //component={Profile}
                           render={() => <Profile store={props.store}/>}/>
                    <Route path='/news'
                           component={News}/>
                    <Route path='/music'
                           component={Music}/>
                    <Route path='/settings'
                           component={Settings}/>
                    <Route path='/friends'
                           render={() => <MyFriends friends ={state.sidebar.friends}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

