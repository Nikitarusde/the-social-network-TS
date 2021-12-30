import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {


    // const message: string = "Hi, how are you?"
    
    return(
            <div className={classes.mein}>
                My posts
                <div>
                    New post
                </div>
                <Post message={"hi"} count={4}/>
                <Post message={"its my first post"} count={5}/>

            </div>
    )
}