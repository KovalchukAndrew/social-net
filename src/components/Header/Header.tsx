import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";


type HeaderPropsType = {
    login: string
    isAuth: boolean

}
function Header(props: HeaderPropsType) {

    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/f2/7f/16/f27f168a92d6d8f144224702eb791282.gif'/>
            <div className={s.login}>

                {

                    props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;