import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";



export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile" className={({isActive}) => isActive ? classes.activeLink : classes.item}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={({isActive}) => isActive ? classes.activeLink : classes.item}>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to="/news" className={({isActive}) => isActive ? classes.activeLink : classes.item}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to="/music" className={({isActive}) => isActive ? classes.activeLink : classes.item}>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={({isActive}) => isActive ? classes.activeLink : classes.item}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}