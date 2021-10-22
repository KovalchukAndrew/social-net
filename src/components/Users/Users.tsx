import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./user.module.css"
import axios from "axios";
import {UserType} from "../../Redux/users-reducer";
import userPhoto from "../../assets/images/man-300x300.png"

class Users extends React.Component<UsersPropsType> {
    getUsers = () => {
        if (this.props.users.length === 0) {

            axios.get<{ items: UserType[] }>("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return <div>
            <button onClick={this.getUsers}>GetUsers</button>
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