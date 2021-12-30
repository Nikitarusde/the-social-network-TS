import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}


export const DialogItem = (props: DialogItemPropsType) => {

    return(
        <div>
            <NavLink to={"/dialogs/" + props.id} className={({isActive}) => isActive ? classes.activeLink : classes.dialog}>
                {props.name}
            </NavLink>
        </div>
    )
}

