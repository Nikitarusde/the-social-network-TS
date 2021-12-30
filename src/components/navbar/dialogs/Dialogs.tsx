import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={"Nikita"} id={"1"}/>
                <DialogItem name={"ALex"} id={"2"}/>
                <DialogItem name={"Paul"} id={"3"}/>
                <DialogItem name={"Dasha"} id={"4"}/>

            </div>
            <div className={classes.messages}>
                <Message message={"Herra"} />

            </div>
        </div>
    )
}