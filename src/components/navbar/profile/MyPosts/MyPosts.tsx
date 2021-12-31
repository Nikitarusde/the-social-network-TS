import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postData = [
        {id: 1, post: "Hi", count: 2},
        {id: 2, post: "Its my first post", count: 4},
        {id: 3, post: "I will to tell about my study in IT-Incubator", count: 5},

    ]

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
                <Post message={postData[0].post} count={postData[0].count}/>
                <Post message={postData[1].post} count={postData[1].count}/>
                <Post message={postData[2].post} count={postData[2].count}/>
            </div>
        </div>
    )
}