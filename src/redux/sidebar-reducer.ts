
import {ActionsTypes} from "./store";
import {SidebarType} from "./types";
let initialState = {
    friends: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Veronika"},
        {id: 3, name: "Viktoria"},
    ],
}
const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) =>{
    switch (action.type){
        default:return state
    }

}

export default sidebarReducer;