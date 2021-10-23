import React, {MouseEventHandler} from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./user.module.css"
import axios from "axios";
import {UserType} from "../../Redux/users-reducer";
import userPhoto from "../../assets/images/man-300x300.png"

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
            axios.get<{ items: UserType[], totalCount: number }>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<{ items: UserType[] }>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];

        for ( let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return <div>
            <div> {
                pages.map(p => {
                    return <span
                        className={this.props.currentPage === p ? s.currentPage : ""}
                        onClick={() => this.onPageChanged(p)}
                    >{p}</span>
                })
            }

            </div>

            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small ? u.photos.small : userPhoto} className={s.avatar}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}> Follow </button> :
                        <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Unfollow</button>}
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
    }

export default Users;