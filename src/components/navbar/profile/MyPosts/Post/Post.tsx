import React from "react";
import classes from "./Post.module.css";

type PostPropsType = {
    message: string,
    count: number,
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU" alt="#"/>
            {props.message}
            <div>
            <span>Like {props.count}</span>
            </div>
        </div>
    )
}