import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import { ProfilePagePropsType} from "../../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePagePropsType
}

export const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.profilePage.post.map(post => <Post id={post.id} post={post.post} count={post.count}/>)

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
                {postsElements}
            </div>
        </div>
    )
}