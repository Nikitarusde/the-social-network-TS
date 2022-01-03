import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePagePropsType} from "../../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePagePropsType,
    message: string,
    addPost: (postMessage: string) => void,
    changeNewTexCallback: (newText: string) => void,
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.post.map(post => <Post id={post.id} post={post.post} count={post.count}/>)

    let addPost = () => {
        // // if (newPostElement.current)
        // let text = newPostElement.current ? newPostElement.current.value : "----";
        // props.addPost(text);
            props.addPost(props.message)
    }
    const newTextCangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTexCallback(e.currentTarget.value);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={newTextCangeHandler}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}