import React from "react";
import "./Profile.module.css"
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePagePropsType,
    addPost: (postMessage: string) => void,
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.main}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost}/>
        </div>
    )
}