import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {PostsDataType} from "../../redux/state";

type ProfileType = {
    postsData: PostsDataType,
    addPost: () => void,
    newPostText: string,
    updateNewPostText:(text:string)=>void
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Avatar/>
            <MyPosts postsData={props.postsData}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>

        </div>
    );
};

