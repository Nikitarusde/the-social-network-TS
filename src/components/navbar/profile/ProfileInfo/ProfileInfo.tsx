import React from "react";
import classes from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1549262166-10bfa568ae30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    alt=""/>
            </div>
            <div >
                <img className={classes.avatar}
                     src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" alt=""/>
            </div>
        </div>
    )
}