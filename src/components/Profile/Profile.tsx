import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.photo}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp8tDz-CLcq9UFcTjadrhIpzYBHY_viZC4w&usqp=CAU"
                    alt="photo"/>
            </div>
            <Avatar/>
            <MyPosts/>

        </div>
    );
};

