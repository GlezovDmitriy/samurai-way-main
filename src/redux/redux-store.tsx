import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

 const store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>
export type StoreReduxType = typeof store
export default store
// @ts-ignore
window.store = store