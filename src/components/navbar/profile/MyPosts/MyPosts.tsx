import React, {LegacyRef} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePagePropsType} from "../../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePagePropsType
}

export const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.profilePage.post.map(post => <Post id={post.id} post={post.post} count={post.count}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // if (newPostElement.current)
        let text = newPostElement.current?.value;
            alert(text);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}