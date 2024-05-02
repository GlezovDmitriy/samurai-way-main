import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ActionsTypes} from "../../redux/store";
import {PostsDataType} from "../../redux/types";
import {StoreReduxType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Preloader} from "../common/Preloader/Preloader";

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    //store:StoreReduxType
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export const Profile = (props: ProfileType) => {
    //let state = props.store.getState();
    //if (props.photos.small === null || props.photos.small === undefined) return <Preloader/>

    return (
        <div className={s.content}>
            <ProfileInfo photo={props.photos.small}
                         contacts={props.contacts}
                         name={props.fullName}/>
            <Avatar/>
            <MyPostsContainer/>

        </div>
    );
};

