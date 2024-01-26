import profileReducer, {AddPostActionType, UpdatePostActionType} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, UpdateMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {DialogsPageType, ProfilePageType, SidebarType} from "./types";

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export type ActionsTypes = UpdateMessageActionType| AddMessageActionType
| AddPostActionType | UpdatePostActionType

export type StoreType = {
    _state: StateType,
    subscribe: (observer: () => void) => void
    _renderEntireTree: () => void,
    getState: () => StateType,
    dispatch: (action: ActionsTypes) => void,
}
export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hello, my friend!", likesCount: 6},
                {id: 2, message: "How are you?", likesCount: 3},
                {id: 3, message: "How ?", likesCount: 5},
                {id: 4, message: "you?", likesCount: 4},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Veronika"},
                {id: 3, name: "Viktoria"},
                {id: 4, name: "Ivan"},
                {id: 5, name: "Alex"},
                {id: 6, name: "Roman"},
            ],
            messagesData: [
                {id: 1, message: "HELLO!"},
                {id: 2, message: "HELLOeeee eeeeee!"},
                {id: 3, message: "HELLOwwwww wwww!"},
                {id: 4, message: "HELLOrrrrr rrrr!"},
            ],
            newMessageText: 'NEW-MESSAGE'
        },
        sidebar: {
            friends: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Veronika"},
                {id: 3, name: "Viktoria"},
            ],
        }
    },

    subscribe(observer: () => void) {
        this._renderEntireTree = observer
    },
    _renderEntireTree() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._renderEntireTree()

    }
}


export default store;