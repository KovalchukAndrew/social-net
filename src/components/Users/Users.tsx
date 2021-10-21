import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./user.module.css"

export const Users = (props: UsersPropsType) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.avatar}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}> Follow </button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Unfollow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>
                        {u.location.city}
                    </div>
                    <div>
                        {u.location.country}
                    </div>
                </span>
            </span>
        </div>)}
    </div>
}
