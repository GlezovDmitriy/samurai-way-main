import React from 'react';
import s from "../Profile.module.css";
import {ContactsType, ProfileType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    photo: string
    contacts: ContactsType
    name: string
}
export const ProfileInfo = (props: ProfileInfoType) => {

    return (
        <div className={s.photo}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp8tDz-CLcq9UFcTjadrhIpzYBHY_viZC4w&usqp=CAU"
                alt="photo"/>
            <div className={s.descriptionBlock}>
                <img src={props.photo}/>
                <div>{props.name}</div>
                <div>{props.contacts.facebook}</div>
                <div>{props.contacts.github}</div>
                <div>{props.contacts.instagram}</div>
            </div>
        </div>
    );
};

