import React from 'react';
import {ActionsTypes} from "../../../redux/store";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {PostsDataType} from "../../../redux/types";

type MyPostsType = {
    postsData: PostsDataType,
    newPostText: string,
    dispatch: (action: ActionsTypes) => void,
}
export const MyPostsContainer = (props: MyPostsType) => {
    const addPost = () => {
        /*props.dispatch({type:'ADD-POST',newPostText:props.newPostText})*/
        props.dispatch(addPostAC(props.newPostText))
    }
    let onPostChange = (text: string) => {
        props.dispatch(updatePostAC(text))
    }
    return (
        <MyPosts updatePost={onPostChange}
                 addPost={addPost}
                 postsData={props.postsData}/>
    );
};

