import React from 'react';
import {ActionsTypes} from "../../../redux/store";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {PostsDataType} from "../../../redux/types";
import {StoreReduxType} from "../../../redux/redux-store";

type MyPostsContainerType = {
    store: StoreReduxType,
    postsData: PostsDataType,
    newPostText: string,
}
export const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState() //берем стэйт в сторе
    const addPost = () => {
        /*props.dispatch({type:'ADD-POST',newPostText:props.newPostText})*/
        props.store.dispatch(addPostAC(props.newPostText))
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
};

