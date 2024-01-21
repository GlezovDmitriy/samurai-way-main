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
import {StoreType} from "./redux/state";
import {MyFriends} from "./components/Friends/MyFriends";

type AppType = {
    store:StoreType,
    /*addPost:()=>void,
    addMessage:(message:string)=>void,
    state: StateType,
    updateNewPostText:(text:string)=>void
    updateNewMessageText:(text:string)=>void*/
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
                                        addMessage={props.store.addMessage.bind(props.store)}
                                        updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                                        newMessageText={state.dialogsPage.newMessageText}
                               />
                           }
                    />
                    {/*render={()=> <Dialogs DialogItemType={} MessageType={}/>}*/}
                    <Route path='/profile'
                        //component={Profile}
                           render={() => <Profile postsData={state.profilePage.postsData}
                                                  newPostText={state.profilePage.newPostText}
                                                  addPost={props.store.addPost.bind(props.store)}
                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    <Route path='/news'
                           component={News}/>
                    <Route path='/music'
                           component={Music}/>
                    <Route path='/settings'
                           component={Settings}/>
                    <Route path='/friends'
                           render={() => <MyFriends friends ={props.store._state.sidebar.friends}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

