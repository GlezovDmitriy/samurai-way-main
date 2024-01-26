import React, {ChangeEvent, ChangeEventHandler, useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes} from "../../../redux/store";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import {PostsDataType} from "../../../redux/types";

type MyPostsType = {
    /*

    dispatch:(action:ActionsTypes)=>void,*/
    newPostText: string,
    postsData: PostsDataType,
    addPost: () => void,
    updatePost: (text: string) => void
}
export const MyPosts = (props: MyPostsType) => {
    let postsElements = props.postsData.map(p => {
        return (
            <Post massage={p.message} likeCount={p.likesCount}/>
        )
    })

    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value;
            props.updatePost(text)

        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                My post
            </div>
            <div>
                <textarea /*className={s.textarea}
                          placeholder={"typing message..."}*/
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}></textarea>
                <div>
                    <button className={s.button}
                            onClick={onAddPost}
                            disabled={props.newPostText == ''}> Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

