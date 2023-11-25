import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post massage = "Hi? how are you?"
                      likeCount = {15}/>
                <Post massage = "It's my first post!"
                      likeCount = {10}/>
            </div>

            <Post massage = "Hi! " likeCount = {25}/>
            <Post massage = "Hello! " likeCount = {14}/>

        </div>

    );
};

