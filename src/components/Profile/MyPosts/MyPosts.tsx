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
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>

    );
};

