import React from "react";
import "./Profile.module.css"
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePagePropsType,
    message: string,
    addPost: (postMessage: string) => void,
    changeNewTexCallback: (newText: string) => void,
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.main}>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                message={props.message}
                addPost={props.addPost}
                changeNewTexCallback={props.changeNewTexCallback}
            />
        </div>
    )
}