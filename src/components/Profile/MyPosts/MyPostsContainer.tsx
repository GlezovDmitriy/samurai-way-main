import React from 'react';
import {ActionsTypes} from "../../../redux/store";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {PostsDataType} from "../../../redux/types";
import {AppStateType, StoreReduxType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MyPostsContainerType = {
    store: StoreReduxType,
    /*postsData: PostsDataType,
    newPostText: string,*/
}
/*export const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState() //берем стэйт в сторе
    const addPost = () => {
        /!*props.dispatch({type:'ADD-POST',newPostText:props.newPostText})*!/
        props.store.dispatch(addPostAC())
    }
    let onPostChange = (text: string) => {
        props.store.dispatch(updatePostAC(text))
    }
    return (
        <MyPosts updatePost={onPostChange}
                 addPost={addPost}
                 postsData={state.profilePage?.postsData}
                 newPostText={state.profilePage?.newPostText}/>
    );
};*/
type mapStateToPropsType = {
    postsData: PostsDataType
    newPostText: string
}
type mapDispatchToPropsType = {
    updatePost: (text: string) => void
    addPost: () => void
}
export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.profilePage?.postsData,
        newPostText: state.profilePage?.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType=>{
    return{
        updatePost: (text: string) => {dispatch(updatePostAC(text))},
        addPost:()=> { dispatch(addPostAC())}
    }
}
export const MyPostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(MyPosts)
