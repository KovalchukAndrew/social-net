import s from "./user.module.css";
import userPhoto from "../../assets/images/man-300x300.png";
import React from "react";
import {UserType} from "../../Redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    unfollow: (id: number) => void
    follow: (id: number) => void
}
type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div> {
            pages.map(p => {
                return <span
                    className={props.currentPage === p ? s.currentPage : ""}
                    onClick={() => props.onPageChanged(p)}
                >{p}</span>
            })
        }

        </div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div> <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small ? u.photos.small : userPhoto} className={s.avatar}/>
                </NavLink>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            axios.delete<ResponseType<{ item: UserType }>>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                withCredentials: true,
                                headers: {"API-KEY": "46d63a79-f294-4637-98b3-eaef83d2a733"},
                            })
                                .then(response => {
                                    if(response.data.resultCode === 0)
                                        props.unfollow(u.id)
                                })


                            props.unfollow(u.id)
                        }}> Unfollow </button> :
                        <button onClick={() => {

                            axios.post<ResponseType<{ item: UserType }>>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {"API-KEY": "46d63a79-f294-4637-98b3-eaef83d2a733"},
                            })
                                .then(response => {
                                    if(response.data.resultCode === 0)
                                    props.follow(u.id)
                                })

                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    {/*<div>*/}
                    {/*    {u.location.city}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    {u.location.country}*/}
                    {/*</div>*/}
                </span>
            </span>
        </div>)}
    </div>
}


export default Users;