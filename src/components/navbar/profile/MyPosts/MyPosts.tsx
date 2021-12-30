import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {


    // const message: string = "Hi, how are you?"

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
               <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={"hi"} count={4}/>
                <Post message={"its my first post"} count={5}/>
            </div>
        </div>
    )
}