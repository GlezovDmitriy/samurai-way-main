import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type MyPostsType = {
    message: string
    id: number
    likesCount: number
}
export const MyPosts = (props:MyPostsType) => {
    let postsData = [
        {id: 1, message: "Hello, my friend!", likesCount: 6},
        {id: 2, message: "How are you?", likesCount: 3}
    ]
    let postsElements = postsData.map(p=>{
        return(
            <Post massage={p.message} likeCount = {p.likesCount}/>
            )
    })
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                My post
            </div>
            <div >
                <textarea className={s.textarea} placeholder={"typing message..."}></textarea>
                <div><button className={s.button}> Add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>




        </div>

    );
};

