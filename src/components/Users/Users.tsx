import s from "./user.module.css";
import userPhoto from "../../assets/images/man-300x300.png";
import React from "react";
import {FilterType, UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UserSearchForm} from "./UserSearchForm";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    users: UserType[]
    UnfollowThunkCreator: (id: number) => void
    FollowThunkCreator: (id: number) => void
    followingInProgress: Array<number>
    isFollowingProgress: (isFetching: boolean, userId: number) => void
}

const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <UserSearchForm onFilterChanged={props.onFilterChanged}/>
        <div> {
            pages.map(p => {
                return <span
                    className={props.currentPage == p ? s.currentPage : ""}
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
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.UnfollowThunkCreator(u.id)
                                  }}>Unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.FollowThunkCreator(u.id)
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