import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

let rootreducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

 const store = createStore(rootreducer)

export type AppStateType = ReturnType<typeof rootreducer>
export type StoreReduxType = typeof store
export default store
// @ts-ignore
window.store = store