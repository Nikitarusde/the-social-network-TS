import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Dasha"},
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your IT-Incubator"},
        {id: 3, message: "Its good"},
        {id: 4, message: "And how are you?"},
    ]

    let messagesElements = messagesData.map(message => <Message message={message.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}