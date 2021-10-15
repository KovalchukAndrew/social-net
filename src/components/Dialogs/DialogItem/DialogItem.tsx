import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

export type DialogsItemType = {
    name: string,
    id: string
}

export const DialogItem = (props: DialogsItemType) => {
    return <div className={s.dialog}>
        <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
}
