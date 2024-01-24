import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type PostType = {
    message: string
    id: number
    likesCount: number
}
export type PostsDataType = PostType[]
export type ProfilePageType = {
    postsData: PostsDataType,
    newPostText: string
}
export type DialogType = {
    id: number,
    name: string
}
export type DialogsDataType = DialogType[]
export type MessageType = {
    id: number,
    message: string
}
export type MessagesDataType = MessageType[]
export type DialogsPageType = {
    dialogsData: DialogsDataType,
    messagesData: MessagesDataType,
    newMessageText: string
}
export type FriendType = {
    id: number,
    name: string,
}
export type FriendsType = FriendType[]
export type SidebarType = {
    friends: FriendsType
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}
export type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string,
}
export type UpdatePostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string,
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    newMessageText: string
}
export type UpdateMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: string,
}
export type ActionsTypes = AddPostActionType | UpdatePostActionType
    | AddMessageActionType | UpdateMessageActionType

export const addPostAC = (newPostText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    }
}
export const updatePostAC = (newText: string): UpdatePostActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    }
}
export const addMessageAC = (newMessageText: string): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE',
        newMessageText: newMessageText
    }
}
export const updateMessageAC = (newText: string): UpdateMessageActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    }
}



export type StoreType = {
    _state: StateType,
    /*addPost: () => void,*/
    /*addMessage: () => void,
    /!*updateNewPostText: (newText: string) => void*!/
    updateNewMessageText: (newText: string) => void*/
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
    /*addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 3
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._renderEntireTree()
    },*/
    /*addMessage() {
        const newMessage = {
            id: this._state.dialogsPage.messagesData.length + 1,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messagesData.push(newMessage)
        this._renderEntireTree()
    },*/
    /*updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._renderEntireTree()
    },*/
    /*updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._renderEntireTree()
        console.log(this._state)
    },*/
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

       /* if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                /!*message: this._state.profilePage.newPostText,*!/
                message: action.newPostText,
                likesCount: 3
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._renderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._renderEntireTree()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {
                id: this._state.dialogsPage.messagesData.length + 1,
                message: action.newMessageText,
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._renderEntireTree()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._renderEntireTree()
            console.log(this._state)
        }*/
    }
}


export default store;