import React from 'react';
import s from './Navbar.module.css';
export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="">News</a>
            </div>
            <div className={s.item}>
                <a href="">Music</a>
            </div>
            <div className={s.item}>
                <a href="">Settings</a>
            </div>
        </div>

)
    ;
};

