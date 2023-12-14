export type PostType = {
    message: string
    id: number
    likesCount: number
}
export type PostsDataType = PostType[]
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
export type FriendType = {
    id:number,
    name: string,
}
export type FriendsType = FriendType[]

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hello, my friend!", likesCount: 6},
            {id: 2, message: "How are you?", likesCount: 3},
            {id: 3, message: "How ?", likesCount: 5},
            {id: 4, message: "you?", likesCount: 4},
        ],
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
    },
    sidebar: {
        friends: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Veronika"},
            {id: 3, name: "Viktoria"},
        ],
    }
}
export default state;