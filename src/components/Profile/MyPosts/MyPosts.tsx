import React, {ChangeEvent, ChangeEventHandler, useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, PostsDataType, PostType,} from "../../../redux/state";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";

type MyPostsType = {
    postsData: PostsDataType,
    newPostText: string,
    dispatch:(action:ActionsTypes)=>void,
}
export const MyPosts = (props: MyPostsType) => {
    let postsElements = props.postsData.map(p => {
        return (
            <Post massage={p.message} likeCount={p.likesCount}/>
        )
    })

    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        /*props.dispatch({type:'ADD-POST',newPostText:props.newPostText})*/
        props.dispatch(addPostAC(props.newPostText))

    }
    let onPostChange = ()=>{
        if(newPostElement.current!== null){
            let text = newPostElement.current.value;
            props.dispatch(updatePostAC(text))
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
                            onClick={addPost}
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

