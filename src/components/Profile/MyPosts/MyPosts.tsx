import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className={s.item}>
                My post
            </div>
            <div >
                <button> Add post</button>
                <textarea></textarea>
            </div>
            <div>
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

