import {renderEntireTree} from "../render";


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
    id:number,
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
let state: StateType = {
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
}

export const addPost = ()=>{
    const newPost = {
        id:5,
        message:state.profilePage.newPostText,
        likesCount:3
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText =''
    renderEntireTree(state)
}
export const addMessage = ()=>{
    const newMessage = {
        id:state.dialogsPage.messagesData.length+1,
        message:state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messagesData.push(newMessage)
}
export const updateNewPostText = (newText:string)=>{
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}
export const updateNewMessageText = (newText:string)=>{
    state.dialogsPage.newMessageText = newText
    renderEntireTree(state)
    console.log(state)
}

export default state;